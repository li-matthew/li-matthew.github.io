import React, { useEffect } from 'react'
import { Typography, makeStyles, Box, Divider, Toolbar, ButtonBase, AppBar } from '@material-ui/core'
import { Link } from 'react-scroll'


const useStyles = makeStyles(() => ({
    homeBox: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        minWidth: 750,
        minHeight: 400,
    },
    divider: {
        backgroundColor: 'white',
        width: '25%',
        margin: 10
    },
    toolBar: {
        marginTop: 100,
        position: 'absolute',
        bottom: 0,
        display: 'block',
        width: '100%',
        backgroundColor: '#424874',
        textAlign: 'center',
        minWidth: 750
        // transition: 'transform 0.5s',
    },
    tabButton: {
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 16,
        fontFamily: 'Nunito',
        transition: '0.5s',
        color: 'white',
        '&:hover': {
            color: '#A6B1E1',
            transition: '0.5s'
        }
    },
    sticky: {
        position: 'fixed',
        top: 0,
        backgroundColor: '#424874',
        width: '100%',
        textAlign: 'center',
        zIndex: 100,
        minWidth: 750
        // transition: 'transform 0.5s',
        // '&:hover': {
        //     transform: 'scaleY(1.1)',
        //     transition: '0.5s'
        // }
    },
    list: {
        padding: 0,
        transition: '0.5s'
    },
    subtext: {
        color: 'white'
    }
    // active: {
    //     color: 'yellow',
    //     transition: '0.5s'
    // },
}));

const tabs = [
    {
        label: "about",
        href: "/about",
    },
    {
        label: "skills",
        href: "/skills",
    },
    {
        label: "projects",
        href: "/projects",
    },
    {
        label: "interests",
        href: "/interests",
    },
    {
        label: "contact",
        href: "/contact"
    }
];

const Home = () => {
    const { homeBox, divider, toolBar, tabButton, sticky, list, active, subtext } = useStyles();
    const [stick, setStick] = React.useState(false);
    const offset = window.innerHeight - 64


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const handleScroll = () => {
        if (window.pageYOffset >= offset) {
            if (!stick) {
                setStick(true);
                // tabs.unshift(
                //     {
                //         label: "home",
                //         href: "",
                //     }
                // );
            }
        } else {
            if (stick) {
                setStick(false);
                // tabs.shift();
            }
        }
    }

    const getTabs = () => {
        return tabs.map(({ label, href }) => {
            return (
                // <ButtonBase
                //     {...{
                //         key: label,
                //         color: "inherit",
                //         className: tabButton,
                //         disableRipple: true
                //     }}
                // >
                //     {/* <Link
                // to="aboutBox"> */}
                //     {label}
                //     {/* </Link> */}
                // </ButtonBase>
                <ButtonBase
                    key={label}
                    disableRipple={true}>
                    <Link
                        className={tabButton}
                        // activeClass={active}
                        to={label}
                        // spy={true}
                        smooth='easeInOutQuart'>
                        {label}
                    </Link>
                </ButtonBase>
            );
        })
    }

    const main = () => {
        return (
            <Box display='flex' className={homeBox} overflow='visible' id='home' bgcolor='primary.main'>
                <Typography variant='h1'>matthew li</Typography>
                <Divider className={divider} />
                <Typography variant='h4' className={subtext}>software engineer</Typography>
                <div className={stick ? sticky : toolBar}>
                    <nav>
                        <ul className={list}>
                            <ButtonBase
                                key='home'
                                disableRipple={true}>
                                <Link
                                    className={tabButton}
                                    to='home'
                                    smooth='easeInOutQuart'>
                                    home
                                </Link>
                            </ButtonBase>
                            {getTabs()}
                        </ul>
                    </nav>
                </div>

            </Box>
        );
    }

    return (
        <React.Fragment>
            {main()}
        </React.Fragment>
    );
}

export default Home
