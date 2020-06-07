import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MaterialButton } from '@material-ui/core/Button';
import { colours, materialStyles } from '../../constants/styles';

// type Size = 'large' | 'small';
// type Hierarchy = 'primary' | 'secondary' | 'tertiary';

// interface Props {
//     text: String;
//     hierarchy: Hierarchy;
//     size: Size;
//     onClick: () => void;
// }

const Button = ({ text, hierarchy = 'primary', size = 'large', onClick, variant } /*: Props */) => {
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();
    const buttonOverrideStyles = {
        fontSize: size === 'large' ? '1.25rem' : '1rem',
        textTransform: 'unset',
        color: colours.primary,
        borderColor: colours.primary,
    };
    return (
        <MaterialButton
            color={hierarchy}
            size={size}
            className={classes.button}
            style={buttonOverrideStyles}
            variant={variant}
            onClick={onClick}
        >
            {text}
        </MaterialButton>
    );
};

export default Button;
