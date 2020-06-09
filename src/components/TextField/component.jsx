import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MaterialTextField } from '@material-ui/core/TextField';
import { colours, materialStyles } from '../../constants/styles';

const TextField = ({ defaultValue, onChange, multiline = false, rows = 1, size = 'large', placeholder = '' }) => {
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();
    const textFieldOverrideStyles = {
        textTransform: 'unset',
        width: '100%',
        margin: '0 auto',
        color: colours.secondary,
        backgroundColor: 'white',
        border: `4px solid ${colours.primary}`,
        padding: '8px 12px 16px',
        boxSizing: 'border-box'
    };
    return (
        <MaterialTextField
            className={classes.textfield}
            defaultValue={defaultValue}
            id="standard-multiline-flexible"
            multiline={multiline}
            rowsMax={rows}
            rows={rows}
            onChange={onChange}
            placeholder={placeholder}
            style={textFieldOverrideStyles}
        />
    );
};

export default TextField;