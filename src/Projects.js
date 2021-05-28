import React from 'react'
import {
    makeStyles, Box, Typography, Divider, Container, Grid,
    Card, CardActionArea, CardMedia, CardActions, CardContent, Button, IconButton
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
}));

const Projects = () => {
    const { projectBox, title, divider, gridTitle, container, grid, projectItem, cardImage, links } = useStyles();

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
                                    <Button size="medium" color="secondary" variant='outlined'>
                                        learn more
                                    </Button>
                                    <Button size="medium" color="secondary" variant='outlined' href='https://li-matthew.github.io/visualizer/' target='_blank'>
                                        view
                                    </Button>
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
                                    <Button size="medium" color="secondary" variant='outlined'>
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
                                    <Button size="medium" color="secondary" variant='outlined'>
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
                                    <Button size="medium" color="secondary" variant='outlined'>
                                        learn more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

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