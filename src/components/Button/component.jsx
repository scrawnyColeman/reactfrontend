import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MaterialButton } from '@material-ui/core/Button';
import { colours, materialStyles } from '../../constants/styles';

const Button = ({ text, hierarchy = 'primary', size = 'large', onClick }) => {
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();
    const buttonOverrideStyles = {
        fontSize: size === 'large' ? '1.25rem' : '1rem',
        textTransform: 'unset',
        color: colours.primary,
    };
    return (
        <MaterialButton
            color={hierarchy}
            size={size}
            className={classes.button}
            style={buttonOverrideStyles}
            variant="text"
            onClick={onClick}
        >
            {text}
        </MaterialButton>
    );
};

export default Button;
