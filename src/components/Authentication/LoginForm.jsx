import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../constants/styles';

const LoginForm = () => {

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
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button text="Log in" variant="text" onClick={() => window.location = '/home'} />
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;