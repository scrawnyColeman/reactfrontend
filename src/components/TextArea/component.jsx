import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MaterialTextField } from '@material-ui/core/TextField';
import { colours, materialStyles } from '../../constants/styles';

// type Size = 'large' | 'small';
// type Hierarchy = 'primary' | 'secondary' | 'tertiary';

// interface Props {
//     text: String;
//     hierarchy: Hierarchy;
//     size: Size;
//     onClick: () => void;
// }

const TextArea = ({ text, hierarchy = 'primary', size = 'large', onClick } /*: Props */) => {
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();
    const textAreaOverrideStyles = {
        height: size === 'large' ? '500px' : '30px',
        textTransform: 'unset',
        width: '90%',
        margin: '0 auto',
        color: colours.secondary,
        backgroundColor: 'white',
        border: `4px solid ${colours.primary}`,
        padding: '6px',
    };
    return (
        <MaterialTextField
            color={colours.hierarchy}
            size={size}
            placeholder={text}
            className={classes.textfield}
            style={textAreaOverrideStyles}
            onClick={onClick}
        >
        </MaterialTextField>
    );
};

export default TextArea;