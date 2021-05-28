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
    MuiDivider: {
      color: '#ff0000'
    },
    MuiTextField: {
      root: {
        
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiOutlinedInput-root': {
          
          '& fieldset': {
            transition: '0.5s',
            borderColor: '#A6B1E1',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
            borderWidth: 1
          },
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: "#A6B1E1",
      },
    },
    MuiSnackbarContent: {
      root: {
        justifyContent: 'center',
      }
    },
    MuiDialogActions: {
      root: {
        justifyContent: 'left',
        paddingLeft: 24
      }
    },
    MuiCard: {
      root: {
        borderColor: '#A6B1E1',
      }
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
