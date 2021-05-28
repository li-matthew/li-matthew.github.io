import React from 'react'
import { makeStyles, Box, Typography, Divider, Container, Grid, TextField, Button } from '@material-ui/core'

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
    contactItem: {
        textAlign: 'center',
        padding: 20,
    },
    container: {
        textAlign: 'center'
    },
    grid: {
        paddingTop: 75
    },
    contactTitle: {
        textAlign: 'center',
        padding: 75
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
}));

const Contact = () => {
    const { contactBox, title, divider, contactItem, container, grid, contactTitle, contactForm,
        submit } = useStyles();

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
                            />
                            <TextField
                                fullWidth
                                required
                                margin='normal'
                                variant='outlined'
                                label='email'
                                color='secondary'
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
                            />
                        </div>
                        <Button
                            className={submit}
                            size='large'
                            variant='outlined'
                            type='submit'
                            color='secondary'
                        >
                            submit
                        </Button>
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