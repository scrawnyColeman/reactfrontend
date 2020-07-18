export const colours = {
    primary: '#B4DF4E',
    secondary: '#EEE',
    background: '#FFF',
};

export const materialStyles = (theme) => ({
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

export const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
    ],
};

export const textFieldOverrideStyles = {
    textTransform: 'unset',
    width: '100%',
    margin: '0 auto',
    color: colours.secondary,
    backgroundColor: 'white',
    border: `4px solid ${colours.primary}`,
    padding: '8px 12px 16px',
    boxSizing: 'border-box',
};

export const buttonOverrideStyles = (size) => ({
    fontSize: size === 'large' ? '1.5rem' : '1.25rem',
    textTransform: 'unset',
    color: colours.primary,
    borderColor: colours.primary,
});
export const commentButtonOverrideStyles = (size) => ({
    fontSize: size === 'small' ? '0.8rem' : '1rem',
    textTransform: 'unset',
    color: colours.primary,
    borderColor: colours.primary,
    padding: 0,
    minWidth: '40px',
});
