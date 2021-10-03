import { Line } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, CardActions } from '@material-ui/core'
import { DateFilter } from './DateFIlter'

const options = {
    scales: {
        yAxes: [
        {
            ticks: {
                beginAtZero: true,
            },
        },
        ],
    },
};

const LineChart = ({ chartData,  onFilterByDates }) => {
    return (
        <Card>
            <CardHeader 
                title={ chartData.name }
                subheader={`Last refreshed at ${ chartData.refreshed}`}
            />
            <CardContent>
                <Line data={chartData} options={options} />
            </CardContent>
            <CardActions>
                <DateFilter endDate={ chartData.endDate } onFilterByDates={ onFilterByDates } code={ chartData.code } />
            </CardActions>
        </Card>
    )
}

export default LineChart
