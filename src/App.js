import { useState, useEffect } from "react"
import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles"

import Header from './components/Header'
import Footer from './components/Footer'

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
  const [ timeSeriesData, setTimeSeriesData ] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchSeriesData()
      setTimeSeriesData(data)
    }
    getTasks()
  }, []);

  // Fetch Company Data
  const fetchSeriesData = async () => {
    const res = await fetch('https://data.nasdaq.com/api/v3/datasets/BATS/EDGA_TGH_PB?start_date=2021-09-24&end_date=2021-09-30&api_key=HaBK6N27mzVSVL2B_sUC')
    const seriesData = await res.json()
    return(seriesData)
  }
  
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
