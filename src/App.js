import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Skills from './Skills'
import About from './About'
import Section from './Section'
import Projects from './Projects'
import Interests from './Interests'
import Contact from './Contact'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424874'
    },
    secondary: {
      main: '#A6B1E1',
    },
  },
  typography: {
    fontFamily: 'Nunito'
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiTypography: {
      h1: {
        textTransform: 'lowercase',
        color: 'white'
      },
      h2: {
        textTransform: 'lowercase'
      },
      h3: {
        textTransform: 'lowercase'
      },
      h4: {
        textTransform: 'lowercase'
      },
    },
    MuiDivider: {
      color: '#ff0000'
    },
    MuiTextField: {
      root: {
        '& label.Mui-focused': {
          color: '#A6B1E1',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#A6B1E1',
          },
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: "white",
      },
    },
  }
})

const App = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Header /> */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
