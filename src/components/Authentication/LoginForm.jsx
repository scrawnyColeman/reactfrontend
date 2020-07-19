import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../constants/styles';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../AuthenticationService/AuthenticationService.js';

const LoginForm = () => {
    const useStyles = makeStyles(materialStyles);
    const history = useHistory();
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-username"
                        name="Username"
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
                        autoComplete="current-password"
                        variant="filled"
                        className={classes.textfield}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button
                        text="Log in"
                        variant="text"
                        onClick={() => {
                            /**
                             * DO BACKEND
                             */
                            if (username === 'scrawnycoleman' && password === 'dummy') {
                                history.push({ pathname: `profile/${username}` });
                                AuthenticationService.registerLogin(username, 'sample@email.com', 1);
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
