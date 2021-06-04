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
        backgroundColor: '#efefef'
        // position: 'relative',
    },
    title: {
        padding: 15,
        paddingBottom: 0,
        paddingTop: 75
    },
    divider: {
        backgroundColor: '#A6B1E1',
        width: '15%',
        margin: 10,
        height: 3
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
    },
    gridTitle: {
        textAlign: 'center',
        padding: 20
    },
}));

const Interests = () => {
    const { interestBox, title, divider, interestItem, container, grid, interestTitle, gridTitle } = useStyles();

    const interestPage = () => {
        return (
            <Box display='flex' className={interestBox} id='interests'>
                <Typography variant='h2' className={title}>interests</Typography>
                <Divider className={divider} />
                <Container className={container}>
                <Grid container spacing={2} justify='space-around' className={grid}>
                        <Grid item xs={4}>
                            <Typography variant='h4' className={gridTitle}>music</Typography>
                            <Typography variant='h6'>
                                In my free time I enjoy simply listening to music to relax. 
                                Sometimes I will even try producing my own music to share with friends.
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='h4' className={gridTitle}>basketball</Typography>
                            <Typography variant='h6'>
                                Since I was younger, I have always been an avid basketball fan and found myself playing the sport whenever I could.
                                Nowadays, I still play occasionally with friends, as well as watch my favorite basketball team play in the NBA.
                            </Typography>
                        </Grid>
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