import React from 'react'
import { makeStyles, Box, Typography, Divider, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    interestBox: {
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        minHeight: 750,
        maxHeight: 1000,
        minWidth: 750,
        backgroundColor: '#eeeeee'
        // position: 'relative',
    },
    title: {
        padding: 15,
        paddingBottom: 0,
        paddingTop: 75
    },
    divider: {
        backgroundColor: 'black',
        width: '15%',
        margin: 10
    },
    interestItem: {
        textAlign: 'center',
        padding: 20,
    },
    container: {
        // padding: 20
    },
    grid: {
        paddingTop: 75
    },
    interestTitle: {
        textAlign: 'center',
        padding: 75
    }
}));

const Interests = () => {
    const { interestBox, title, divider, interestItem, container, grid, interestTitle } = useStyles();

    const interestPage = () => {
        return (
            <Box display='flex' className={interestBox} id='interests'>
                <Typography variant='h2' className={title}>interests</Typography>
                <Divider className={divider} />
                <Container className={container}>
                    <Grid container spacing={2} justify='space-around' className={grid}>
                        
                    </Grid>
                </Container>
            </Box>
        )
    }

    return (
        <React.Fragment>
            {interestPage()}
        </React.Fragment>
    );
}

export default Interests