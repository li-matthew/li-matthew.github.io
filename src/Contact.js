import React from 'react'
import { makeStyles, Box, Typography, Divider, Container, TextField, Button, Snackbar, SnackbarContent, Grow } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    contactBox: {
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        minHeight: 750,
        maxHeight: 1000,
        minWidth: 750,
        // position: 'relative',
    },
    title: {
        padding: 15,
        paddingBottom: 0,
        paddingTop: 75,
        color: 'white'
    },
    divider: {
        backgroundColor: '#A6B1E1',
        width: '15%',
        margin: 10,
        height: 3
    },
    container: {
        textAlign: 'center'
    },
    contactForm: {
        width: '50%',
        margin: 'auto',
        paddingTop: 75,
        transition: '0.5s'
    },
    submit: {
        marginTop: 20
    },
    input: {
        color: 'white'
    },
    snack: {
        backgroundColor: '#A6B1E1',
        color: 'black',
        boxShadow: 'none',
        
    }
}));

const Contact = () => {
    const { contactBox, title, divider, container, contactForm,
        submit, input, snack } = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleSubmit = () => {
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const contactPage = () => {
        return (
            <Box display='flex' className={contactBox} id='contact' bgcolor='primary.main'>
                <Typography variant='h2' className={title}>contact</Typography>
                <Divider className={divider} />
                <Container className={container}>
                    <form className={contactForm}>
                        <div>
                            <TextField
                                fullWidth
                                required
                                margin='normal'
                                variant='outlined'
                                label='name'
                                color='secondary'
                                InputProps={{
                                    className: input
                                }}
                            />
                            <TextField
                                fullWidth
                                required
                                margin='normal'
                                variant='outlined'
                                label='email'
                                color='secondary'
                                InputProps={{
                                    className: input
                                }}
                            />
                            <TextField
                                fullWidth
                                required
                                margin='normal'
                                variant='outlined'
                                label='message'
                                color='secondary'
                                multiline
                                rows={4}
                                InputProps={{
                                    className: input
                                }}
                            />
                        </div>
                        <Button
                            className={submit}
                            size='large'
                            variant='outlined'
                            type='reset'
                            color='secondary'
                            onClick={handleSubmit}
                        >
                            submit
                        </Button>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            TransitionComponent={Grow}
                        >
                            <SnackbarContent
                            message="Message Submitted"
                            className={snack}
                            />
                        </Snackbar>
                    </form>
                </Container>
            </Box>
        )
    }

    return (
        <React.Fragment>
            {contactPage()}
        </React.Fragment>
    );
}

export default Contact