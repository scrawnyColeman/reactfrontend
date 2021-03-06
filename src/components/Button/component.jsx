import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MaterialButton } from '@material-ui/core/Button';
import { buttonOverrideStyles, materialStyles } from '../../constants/styles';

const Button = ({ text, hierarchy = 'primary', size = 'large', onClick, children, variant }) => {
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();

    return (
        <MaterialButton
            color={hierarchy}
            size={size}
            className={classes.button}
            style={buttonOverrideStyles(size)}
            variant={variant}
            onClick={onClick}
            children={children}
        >
            {text}
            {children}
        </MaterialButton>
    );
};

export default Button;
