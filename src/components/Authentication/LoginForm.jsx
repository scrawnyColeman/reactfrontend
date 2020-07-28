import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../constants/styles';
import AuthenticationService from '../AuthenticationService/AuthenticationService.js';
import Error from '../LoginError/component';

const LoginForm = ({ setLocalUsername }) => {
    const useStyles = makeStyles(materialStyles);
    const history = useHistory();
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidCredentialsMessage, setInvalidCredentialsMessage] = useState(false);
    const login = () => {
        AuthenticationService.executeBasicAuth(username, password)
            .then(() => retrieveUserId(username, password))
            .then(() => sessionStorage.setItem('authToken', `Basic ${window.btoa(`${username}:${password}`)}`))
            .then(() => setLocalUsername(username))
            .then(() => history.push({ pathname: `/profile/${username}` }))
            .catch(() => setInvalidCredentialsMessage(true));
    };
    const retrieveUserId = (username, password) =>
        axios
            .get(`http://localhost:8080/njoy/users/${username}/user`, {
                headers: { authorization: `Basic ${window.btoa(`${username}:${password}`)}` },
            })
            .then((response) => {
                const { username, email, id, userRole } = response.data;
                sessionStorage.setItem('activeUser', username);
                sessionStorage.setItem('activeEmail', email);
                sessionStorage.setItem('activeId', id);
                sessionStorage.setItem('activeType', userRole.roleName);
            });
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={() => login()}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-username"
                        name="Username"
                        label="Username"
                        type="text"
                        variant="filled"
                        className={classes.textfield}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-password"
                        type="password"
                        label="password"
                        autoComplete="current-password"
                        variant="filled"
                        className={classes.textfield}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button text="Log in" variant="text" onClick={() => login()} />
                </Grid>
            </Grid>
            {invalidCredentialsMessage && <Error message={`Sorry. Your credentials are invalid.`} />}
        </form>
    );
};

export default LoginForm;
