import { Line } from 'react-chartjs-2'

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
        <>
            <div className='header'>
                <h3 className='title'>{ chartData.name }</h3>
            </div>
            <Line data={chartData} options={options} />
        </>
    )
}

export default LineChart
