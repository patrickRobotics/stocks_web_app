import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Header from './components/Header'
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e11667",
    },
    secondary: {
      main: "#c7dBed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />

        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>

    </div>
  );
}

export default App;
