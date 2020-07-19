import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MaterialTextField } from '@material-ui/core/TextField';
import { materialStyles, textFieldOverrideStyles } from '../../constants/styles';

const TextField = ({ defaultValue, onChange, disabled = false, multiline = false, rows = 1, placeholder = '' }) => {
    const useStyles = makeStyles(materialStyles);
    const classes = useStyles();

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
            disabled={disabled}
        />
    );
};

export default TextField;
