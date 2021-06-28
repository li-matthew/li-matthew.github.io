import React from 'react'
import { makeStyles, Box, Typography, Divider, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    skillBox: {
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
    skillItem: {
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold'
    },
    container: {
        // padding: 20
    },
    mainGrid: {
        paddingTop: 75,
    },
    skillTitle: {
        textAlign: 'center',
        paddingTop: 75
    },
    otherGrid: {
        paddingTop: 75,
        paddingLeft: 100,
        paddingRight: 100
    }
}));

const Skills = () => {
    const { skillBox, title, divider, skillItem, container, mainGrid, skillTitle, otherGrid } = useStyles();

    const skillPage = () => {
        return (
            <Box display='flex' className={skillBox} id='skills'>
                <Typography variant='h2' className={title}>skills</Typography>
                <Divider className={divider} />
                <Container className={container}>
                    <Grid container spacing={5} justify='space-around' className={mainGrid}>
                        <Grid item xs>
                        <Typography variant='h5' className={skillItem}>Java</Typography>
                        </Grid>
                        <Grid item xs>
                        <Typography variant='h5' className={skillItem}>Python</Typography>
                        </Grid>
                        <Grid item xs>
                        <Typography variant='h5' className={skillItem}>ReactJS</Typography>
                        </Grid>
                        <Grid item xs>
                        <Typography variant='h5' className={skillItem}>JavaScript</Typography>
                        </Grid>
                        <Grid item xs>
                        <Typography variant='h5' className={skillItem}>C++</Typography>
                        </Grid>
                    </Grid>
                    <Typography variant='h3' className={skillTitle}>other</Typography>
                    <Grid container spacing={2} justify='space-around' className={otherGrid}>
                        <Grid item xs={3}>
                        <ul>
                            <li><Typography>C</Typography></li>
                            <li><Typography>HTML/CSS</Typography></li>
                            <li><Typography>SQL</Typography></li>
                            <li><Typography>R</Typography></li>
                            <li><Typography>TypeScript</Typography></li>
                            <li><Typography>PHP</Typography></li>
                        </ul>
                        </Grid>
                        <Grid item xs={3}>
                        <ul>
                            <li><Typography>Angular</Typography></li>
                            <li><Typography>VueJS</Typography></li>
                            <li><Typography>Django</Typography></li>
                            <li><Typography>MongoDB</Typography></li>
                            <li><Typography>NodeJS</Typography></li>
                            <li><Typography>Laravel</Typography></li>
                            <li><Typography>Express</Typography></li>
                            <li><Typography>Bootstrap</Typography></li>
                        </ul>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }

    return (
        <React.Fragment>
            {skillPage()}
        </React.Fragment>
    );
}

export default Skills