export const styles = theme => ({
    button: {
        fontSize: '1.125rem',
        textTransform: 'uppercase',
        letterSpacing: '.03125rem',
        borderRadius: '100px',
        fontWeight: '700',
        userSelect: 'none',
        height: '69px',
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        boxShadow: 'none',
        width: '100%',
        padding: 0,
        "&:hover": {
            transform: 'scale(1.05)'
        },
        '@media only screen and (max-width: 480px)': {
            height: '42px',
        }
    },
    buttonContainer: {
        width: '16.6667%',
        maxWidth: '170px',
        '@media only screen and (min-width: 769px)': {
            width: '16.6667%'
        },
        '@media only screen and (min-width: 0px)': {
            width: '25%'
        }
    },
    inputBar: {
        width: '100%',
        backgroundColor: '#EBECF3',
        padding: '40px 25px',
        boxSizing: 'border-box',
        '@media only screen and (max-width: 768px) and (min-width: 481px)': {
            padding: '20px 15px',
        },
        '@media only screen and (max-width: 480px)': {
            padding: '14px',
        }
    },
    inputBarFixed: {
        transition: 'bottom .3s cubic-bezier(.55,0,.1,1)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    inputBarInner: {
        display: 'flex',
    },
    input: {
        backgroundColor: 'inherit',
        flex: 1,
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        fontSize: '2rem',
        color: '#2e2d33',
        boxShadow: 'none',
        border: 'none',
        '&:focus': {
            outlineColor: 'transparent',
            outlineStyle: 'none'
        },
        '@media only screen and (max-width: 480px)': {
            fontSize: '1.5rem',
        }
    },
});