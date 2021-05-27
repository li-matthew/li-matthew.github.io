import React from 'react'
import { makeStyles, Box, Typography, Divider, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    box: {
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
        minHeight: 750,
        maxHeight: 1000,
        minWidth: 600
        // position: 'relative',
    },
    title: {
        padding: 15,
        paddingBottom: 0,
        paddingTop: 75
    },
    divider: {
        backgroundColor: 'black',
        width: '25%',
        margin: 10
    },
}));

const Section = (page) => {
    const { box, title, divider } = useStyles();
    console.log(page)

    const makeSection = (page) => {
        return (
            <Box display='flex' className={box}>
                <Typography variant='h2' className={title}>ABOUT</Typography>
                <Divider className={divider} />
                    {page}
            </Box>
        )
    }

    return (
        <React.Fragment>
            {makeSection()}
        </React.Fragment>
    );
}

export default Section