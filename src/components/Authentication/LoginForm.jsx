import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../constants/styles';
import { useHistory } from 'react-router-dom';

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
                        label="Username"
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
                        label="Password"
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
                            if (username === 'scrawnycoleman' && password === 'dummy') {
                                history.push({ pathname: `home/${username}` });
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
