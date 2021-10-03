import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import { Card, CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import Autocomplete from '@material-ui/lab/Autocomplete'

import Header from './components/Header'
import Footer from './components/Footer'
import LineChart from './components/LineChart'

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
  bigSpace: {
    marginTop: "5rem"
  },
  grid:{
    padding: "2.5rem",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const [ currentCode, setCurrentCode ] = useState('')
  const [ batCodes, setBatsCodes ] = useState([])
  const [ timeSeriesData, setTimeSeriesData ] = useState([])

  useEffect(() => {
    const getBatsCodes = async () => {
      const data = await fetchBatsCodes()
      const labels = data.map(item => {
        return { label:item.code }
      })
      setBatsCodes(labels)
    }
    getBatsCodes()
  }, []);

  // Fetch BATS codes
  const fetchBatsCodes = async () => {
    const res = await fetch('http://localhost:5000/codes')
    const data = await res.json()
    return(data)
  }

  // Fetch Company Data
  const fetchSeriesData = async (code) => {
    const res = await fetch(`https://data.nasdaq.com/api/v3/datasets/BATS/${code}?api_key=HaBK6N27mzVSVL2B_sUC`)
    const seriesData = await res.json()
    return(seriesData)
  }

  const filterByDates = async (filterText) => {
    getSeriesData(filterText)
  }

  const getSeriesData = async (object, value) => {
    let data
    if(value) {
      data = await fetchSeriesData(value.label)
    } else {
      data = await fetchSeriesData(object.filterText)
    }

    setCurrentCode(data.dataset.dataset_code)

    data.dataset.data.reverse()
    setTimeSeriesData({
      code: data.dataset.dataset_code,
      name: data.dataset.name,
      refreshed: data.dataset.refreshed_at,
      startDate: data.dataset.start_date,
      endDate: data.dataset.end_date,
      labels: data.dataset.data.map((item) => item[0]),
      datasets: [
        {
          label: data.dataset.column_names[1],
          data: data.dataset.data.map((item) => item[1]),
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd"
        },
        {
          label: data.dataset.column_names[2],
          data: data.dataset.data.map((item) => item[2]),
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd"
        }
      ]
    })
  }
      
  
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <div className={classes.grid}>

          <Grid container spacing={2}>
            <Grid item xs>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Select a company by it BATS code to view data
                  </Typography>
                  <Autocomplete style={{ width: 350 }} getOptionLabel={ option => option.label }
                    disablePortal options={ batCodes } sx={{ width: 300 }} onChange={ getSeriesData }
                    renderInput={ (params) => 
                      <TextField 
                        { ...params }
                        label="Short Sale Market for Stock Symbol"
                        variant="standard" fullWidth />
                    }
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={8}>
            {currentCode && <LineChart chartData={ timeSeriesData } onFilterByDates={filterByDates} />}
            </Grid>

          </Grid>

        </div>
        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>

    </div>
  );
}

export default App;
