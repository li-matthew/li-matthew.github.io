import React from 'react'
import {
    makeStyles, Box, Typography, Divider, Container, Grid,
    Card, CardActionArea, CardMedia, CardActions, CardContent, Button, IconButton,
    Dialog, DialogTitle, DialogContent, DialogActions
} from '@material-ui/core'
import sandwichtime from './media/sandwichtime.png'
import schedule from './media/schedule.png'
import spotify from './media/spotify.png'
import anova from './media/anova.png'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
    projectBox: {
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
        paddingTop: 75,
        overflow: 'hidden'
    },
    projectItem: {
        textAlign: 'center',
        padding: 20,
    },
    cardImage: {
        height: 200,
        '@media (max-width: 1000px)': {
            height: 'max-width'
        },
    },
    links: {
        float: 'right',
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    dialogImage: {
        width: 500,
        display: 'block',
        margin: 'auto',
        paddingBottom: 16
    }
}));

const Projects = () => {
    const { projectBox, title, divider, gridTitle, container, grid, projectItem, cardImage, links, dialogImage } = useStyles();
    const [projectOne, setProjectOne] = React.useState(false);
    const [projectTwo, setProjectTwo] = React.useState(false);
    const [projectThree, setProjectThree] = React.useState(false);
    const [projectFour, setProjectFour] = React.useState(false);

    const handleClose = () => {
        setProjectOne(false)
        setProjectTwo(false)
        setProjectThree(false)
        setProjectFour(false)
    };

    const handleProjectOne = () => {
        setProjectOne(true)
    }
    const handleProjectTwo = () => {
        setProjectTwo(true)
    }
    const handleProjectThree = () => {
        setProjectThree(true)
    }
    const handleProjectFour = () => {
        setProjectFour(true)
    }

    const projectPage = () => {
        return (
            <Box display='flex' className={projectBox} id='projects'>
                <Typography variant='h2' className={title}>projects</Typography>
                <Divider className={divider} />
                <Container className={container}>
                    <Grid container spacing={4} justify='space-around' className={grid} alignItems='center'>
                        <Grid item xs>
                            <Card variant='outlined'>
                                <CardMedia
                                    className={cardImage}
                                    image={sandwichtime}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4">
                                        sandwich time
                                        </Typography>
                                    {/* <Typography variant="body2" color="textSecondary" component="p">
                                        An app that takes microphone input and converts it into an audio visualization
                                        <br></br>
                                        <br></br>
                                        </Typography> */}
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        ReactJS <span>&#8226;</span> WebAudio API
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" color="secondary" variant='outlined' onClick={handleProjectOne}>
                                        learn more
                                    </Button>
                                    {/* <Button size="medium" color="secondary" variant='outlined' href='https://li-matthew.github.io/visualizer/' target='_blank'>
                                        view
                                    </Button> */}
                                    <IconButton
                                        className={links}
                                        disableRipple
                                        href='https://github.com/li-matthew/visualizer'
                                        target='_blank'
                                    >
                                        <GitHubIcon
                                            color='secondary'
                                            fontSize='medium'
                                        />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card variant='outlined'>
                                <CardMedia
                                    className={cardImage}
                                    image={schedule}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4">
                                        scheduling system
                                        </Typography>
                                    {/* <Typography variant="body2" color="textSecondary" component="p">
                                        An app that takes microphone input and converts it into an audio visualization
                                        <br></br>
                                        <br></br>
                                        </Typography> */}
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        ExpressJS <span>&#8226;</span> HTML/CSS <span>&#8226;</span> SQL
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" color="secondary" variant='outlined' onClick={handleProjectTwo}>
                                        learn more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card variant='outlined'>
                                <CardMedia
                                    className={cardImage}
                                    image={spotify}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4">
                                        spotify classification
                                        </Typography>
                                    {/* <Typography variant="body2" color="textSecondary" component="p">
                                        An app that takes microphone input and converts it into an audio visualization
                                        <br></br>
                                        <br></br>
                                        </Typography> */}
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        Python <span>&#8226;</span> scikit-learn <span>&#8226;</span> pandas <span>&#8226;</span> R <span>&#8226;</span> Spotify API
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" color="secondary" variant='outlined' onClick={handleProjectThree}>
                                        learn more
                                    </Button>
                                    <IconButton
                                        className={links}
                                        disableRipple
                                        href='https://github.com/li-matthew/SpotifyProject'
                                        target='_blank'
                                    >
                                        <GitHubIcon
                                            color='secondary'
                                            fontSize='medium'
                                        />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card variant='outlined'>
                                <CardMedia
                                    className={cardImage}
                                    image={anova}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4">
                                        miltary expenditure
                                        </Typography>
                                    {/* <Typography variant="body2" color="textSecondary" component="p">
                                        An app that takes microphone input and converts it into an audio visualization
                                        <br></br>
                                        <br></br>
                                        </Typography> */}
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        R <span>&#8226;</span> ANOVA
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" color="secondary" variant='outlined' onClick={handleProjectFour}>
                                        learn more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <Dialog onClose={handleClose} open={projectOne} maxWidth='sm'>
                        <DialogTitle onClose={handleClose}>
                            <Typography variant="h4">
                                sandwich time
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <img src={sandwichtime} className={dialogImage} />
                            <Typography gutterBottom>
                                A web application to visualize audio data received from the microphone.
                                It also includes three different visualization styles with a variety of controls to customize the experience.
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                ExpressJS <span>&#8226;</span> HTML/CSS <span>&#8226;</span> SQL
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='outlined' onClick={handleClose} color='secondary'>
                                close
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog onClose={handleClose} open={projectTwo} maxWidth='sm'>
                        <DialogTitle onClose={handleClose}>
                            <Typography variant="h4">
                                scheduling system
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <img src={schedule} className={dialogImage} />
                            <Typography gutterBottom>
                                A web application for professors, TAs, and students to schedule help sessions based on enrolled courses.
                                Professors can add courses and help sessions for those courses as well as assign TAs to those sessions.
                                Students can sign up for available help sessions for their enrolled courses.
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                ExpressJS <span>&#8226;</span> HTML/CSS <span>&#8226;</span> SQL
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='outlined' onClick={handleClose} color='secondary'>
                                close
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog onClose={handleClose} open={projectThree} maxWidth='sm'>
                        <DialogTitle onClose={handleClose}>
                            <Typography variant="h4">
                                spotify classification
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <img src={spotify} className={dialogImage} />
                            <Typography gutterBottom>
                                A program that collects all tracks from your Spotify playlists and gets corresponding feature data from the Spotify API.
                                Uses PCA and k-means to cluster them into different playlists based on said data.
                                New tracks added to a specified playlist will be automatically classified and added to the correct cluster playlist.
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                        Python <span>&#8226;</span> scikit-learn <span>&#8226;</span> pandas <span>&#8226;</span> R <span>&#8226;</span> Spotify API
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='outlined' onClick={handleClose} color='secondary'>
                                close
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog onClose={handleClose} open={projectFour} maxWidth='sm'>
                        <DialogTitle onClose={handleClose}>
                            <Typography variant="h4">
                                military expenditure
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <img src={anova} className={dialogImage} />
                            <Typography gutterBottom>
                                Collected data of yearly military expenditure from various countries. 
                                Applied ANOVA on data to test hypotheses on future expenditures.
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                        R <span>&#8226;</span> ANOVA
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='outlined' onClick={handleClose} color='secondary'>
                                close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Box>
        )
    }

    return (
        <React.Fragment>
            {projectPage()}
        </React.Fragment>
    );
}

export default Projects