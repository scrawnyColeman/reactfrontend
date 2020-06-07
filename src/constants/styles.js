const colours = {
    primary: '#B4DF4E',
    secondary: '#eee',
    background: '#fff',
};

const materialStyles = (theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        '& .MuiFormLabel-root': {
            color: colours.secondary,
        },
        '& .MuiFormHelperText-root': {
            color: colours.secondary,
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: `2px solid ${colours.primary}`,
        },
        '& .MuiInputBase-input': {
            color: colours.primary,
        },
        button: {
            margin: theme.spacing(1),
        },
        textfield: {
            backgroundColor: colours.background,
        },
    },
});

export { colours, materialStyles };
