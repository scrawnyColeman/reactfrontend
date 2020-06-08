import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../constants/styles';
import { useUserStore } from '../../userStorage/userStore';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [passWord, setPassword] = useState('');
    const [user, setUser] = useUserStore();

    function login() {
        if (username === 'thomas' && passWord === 'dummy') {
            setUser(username);
            console.log(user.username)
        } else {
            console.log('failed')
        }
    }

    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-username"
                        label="Username"
                        name="Username"
                        type="text"
                        variant="filled"
                        className={classes.textfield}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        className={classes.textfield}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button text="Log in" variant="text" onClick={login} />
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
