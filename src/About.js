import React from 'react'
import { makeStyles, Box, Typography, Divider, Container, Grid, IconButton, Button } from '@material-ui/core'
import purdueImage from './media/purdue.svg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import SaveAltRoundedIcon from '@material-ui/icons/SaveAltRounded';
import resume from './media/MatthewLi-se.pdf'
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

const useStyles = makeStyles(() => ({
    aboutBox: {
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
        minHeight: 750,
        maxHeight: 1000,
        minWidth: 750
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
    gridTitle: {
        textAlign: 'center',
        padding: 20
    },
    container: {
        // padding: 20,
        // paddingLeft: 100,
        // paddingRight: 100
    },
    grid: {
        paddingTop: 75
    },
    image: {
        paddingTop: 50,
    },
    links: {
        paddingTop: 20,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    resume: {
        marginTop: 20,
    }
}));

const About = () => {
    const { aboutBox, title, divider, gridTitle, container, grid, image, links, resume } = useStyles();

    const aboutPage = () => {
        return (
            <Box display='flex' className={aboutBox} id='about'>
                <Typography variant='h2' className={title}>about</Typography>
                <Divider className={divider} />
                <Container className={container}>
                    <Grid container spacing={2} justify='space-around' className={grid}>
                        <Grid item xs={4}>
                            <Typography variant='h4' className={gridTitle}>me</Typography>
                            <Typography variant='h6'>
                                Hi, my name is Matthew Li
                            </Typography>
                            <Button
                                className={resume}
                                variant="outlined"
                                color="secondary"
                                size="medium"
                                startIcon={<DescriptionRoundedIcon />}
                                href={resume}
                                target='_blank'
                            >
                                view resume
                            </Button>
                            <br></br>
                            <IconButton
                            className={links}
                            disableRipple
                            href='mailto:mtthw.li7@gmail.com'
                            target='_blank'
                            >
                                <EmailRoundedIcon
                                    color='secondary'
                                    fontSize='medium'
                                />
                            </IconButton>
                            <IconButton
                            className={links}
                            disableRipple
                            href='https://www.linkedin.com/in/li-matthew/'
                            target='_blank'
                            >
                                <LinkedInIcon
                                    color='secondary'
                                    fontSize='medium'
                                />
                            </IconButton>
                            <IconButton
                            className={links}
                            disableRipple
                            href='https://github.com/li-matthew'
                            target='_blank'
                            >
                                <GitHubIcon
                                    color='secondary'
                                    fontSize='medium'
                                />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='h4' className={gridTitle}>education</Typography>
                            <Typography variant='h6'>
                                Purdue University<br></br>
                                West Lafayette, Indiana<br></br>
                                B.S. in Computer Science, Data Science<br></br>
                                August 2018 - May 2022
                            </Typography>
                            <img src={purdueImage} className={image} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }

    return (
        <React.Fragment>
            {aboutPage()}
        </React.Fragment>
    );
}

export default About