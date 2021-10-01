import { Line } from 'react-chartjs-2'
import { Card, CardContent, CardHeader } from '@material-ui/core'

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
        </Card>
    )
}

export default LineChart
