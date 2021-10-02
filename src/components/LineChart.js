import { Line } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, CardActions } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

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

const LineChart = ({ chartData }) => {
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
                <Typography color="secondary">
                    Start Date: { chartData.startDate}
                </Typography>
                <Typography color="secondary">
                    End Date: { chartData.endDate}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default LineChart
