export const styles = theme => ({
    chatListContainer: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: '149px',
        overflow: 'auto',
        top: '56px',
        '@media only screen and (max-width: 768px) and (min-width: 481px)': {
            bottom: '109px',
        },
        '@media (min-width: 600px)': {
            top: '64px',
        },
        '@media only screen and (max-width: 480px)': {
            bottom: '70px',
        },
    },
    chatListInner: {
        padding: '20px 4% 0 4% ',
        boxSizing: 'border-box',
        '@media only screen and (min-width: 481px)': {
            width: '83.333%',
            margin: 'auto'
        },
        '@media only screen and (max-width: 480px)': {
            width: '100%',
            padding: '20px 0 ',
        }
    },
    messageContainer: {
        margin: '30px 0',
    },
    messageText: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: '400',
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        whiteSpace: 'pre-wrap',
        padding: '1px 48px 0',
        '@media only screen and (max-width: 480px)': {
            fontSize: '1.25rem',
            padding: '7px, 0 0 40px',
        }
    },
    rightMessageText: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        textAlign: 'right',
        fontWeight: '400',
        transition: '.2s cubic-bezier(.55,0,.1,1)',
        whiteSpace: 'pre-wrap',
        padding: '1px 48px 0',
        '@media only screen and (max-width: 480px)': {
            fontSize: '1.25rem',
            padding: '7px, 0 0 40px',
        }
    },
    messageIcon: {
        float: 'left',
        fontSize: '35px',
        padding: '10px 0',
        color: theme.palette.secondary.main
    },
    rightMessageIcon: {
        float: 'right',
        fontSize: '35px',
        padding: '10px 0',
        color: theme.palette.primary.main
    },
});