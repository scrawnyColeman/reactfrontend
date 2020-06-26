import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MaterialButton } from '@material-ui/core/Button';
import { commentButtonOverrideStyles, materialStyles } from '../../constants/styles';

const Button = ({ text, hierarchy = 'primary', size = 'tiny', onClick, variant }) => {
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();

    return (
        <MaterialButton
            color={hierarchy}
            size={size}
            className={classes.button}
            style={commentButtonOverrideStyles(size)}
            variant={variant}
            onClick={onClick}
        >
            {text}
        </MaterialButton>
    );
};

export default Button;
