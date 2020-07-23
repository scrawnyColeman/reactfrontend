import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../constants/styles';
import axios from 'axios';
import LoginError from '../LoginError/component';
import { useHistory } from 'react-router-dom';

const RegisterForm = ({ setLocalUsername }) => {
    const useStyles = makeStyles(materialStyles);
    const history = useHistory();
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [displayPasswordMismatch, setDisplayPasswordMismatch] = useState();
    const [regexError, setRegexError] = useState(false);
    const [usernameTaken, setUsernameTaken] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);
    const register = (username, email, password, verifyPassword) => {
        if (checkPasswordsMatch(password, verifyPassword)) {
            if (analysePassword(password)) {
                registerIfUsernameAndEmailAvailable(username, email, password);
            }
        } else {
            setDisplayPasswordMismatch(true);
        }
    };
    const checkPasswordsMatch = (password, verifyPassword) => {
        return password === verifyPassword ? true : false;
    };
    const analysePassword = (password) => {
        var p = password,
            errors = [];
        if (p.length < 8) {
            errors.push('error');
        }
        if (p.search(/[a-z]/i) < 0) {
            errors.push('error');
        }
        if (p.search(/[0-9]/) < 0) {
            errors.push('error');
        }
        if (errors.length > 0) {
            setRegexError(true);
            return false;
        }
        setRegexError(false);
        return true;
    };
    const registerIfUsernameAndEmailAvailable = (username, email, password) => {
        console.log(username);
        axios.get(`http://localhost:8080/njoy/user/${username}/${email}`).then((response) => {
            response.data[0] && setUsernameTaken(true);
            response.data[1] && setEmailTaken(true);
            if (response.data[0] === null && response.data[1] === null) {
                const user = {
                    username: username,
                    email: email,
                    password: password,
                };
                axios
                    .post(`http://localhost:8080/njoy/user/`, user)
                    .then((response) => {
                        const { username, email, id } = response.data;
                        const authToken = `Basic ${window.btoa(`${username}:${password}`)}`;
                        sessionStorage.setItem('activeUser', username);
                        sessionStorage.setItem('activeEmail', email);
                        sessionStorage.setItem('activeId', id);
                        sessionStorage.setItem('activeType', 'user');
                        sessionStorage.setItem('authToken', authToken);
                    })
                    .then(() => setLocalUsername(username))
                    .then(() => history.push({ pathname: `/profile/${username}` }))
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-username"
                        label="Username"
                        type="text"
                        variant="filled"
                        className={classes.textfield}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setUsernameTaken(false);
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-email"
                        label="Email Address"
                        type="email"
                        variant="filled"
                        autoComplete="off"
                        className={classes.textfield}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailTaken(false);
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-password"
                        label="Password"
                        type="password"
                        variant="filled"
                        className={classes.textfield}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setDisplayPasswordMismatch(false);
                            analysePassword(e.target.value);
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-retyped-password"
                        label="Retype Password"
                        type="password"
                        variant="filled"
                        className={classes.textfield}
                        onChange={(e) => {
                            setVerifyPassword(e.target.value);
                            setDisplayPasswordMismatch(false);
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button
                        text="Register"
                        variant="text"
                        onClick={() => register(username, email, password, verifyPassword)}
                    />
                </Grid>
            </Grid>
            {displayPasswordMismatch && <LoginError message={`Sorry. Your passwords don't match`} />}
            {usernameTaken && !emailTaken && <LoginError message={`That username is already taken`} />}
            {!usernameTaken && emailTaken && <LoginError message={`That email is already taken`} />}
            {usernameTaken && emailTaken && <LoginError message={`Username and Email are both in use.`} />}
            {regexError && (
                <LoginError message={`Password should contain uppercase letter, at least 8 characters and a number`} />
            )}
        </form>
    );
};

export default RegisterForm;
