import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/component';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { materialStyles } from '../../constants/styles';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
    const history = useHistory();
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();

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
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="outlined-dob" type="date" variant="filled" className={classes.textfield} />
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
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button text="Register" variant="text" onClick={() => history.push({ pathname: 'home' })} />
                </Grid>
            </Grid>
        </form>
    );
};

export default RegisterForm;
