import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function WeatherChart({data}) {
    const chartData = [...data].reverse()
        .filter((item, index) => index % 300 === 0)
        .map(item => ({
            time: item._source.measured,
            temp: item._source.TA1_0
        }))

        return (
            <LineChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" 
                tickFormatter={(t) => new Date(t).toLocaleDateString('no', { month: 'short', day: 'numeric', hour: '2-digit' })}
                />
                <YAxis />
                <Tooltip />
                <Line type="monotone" name="Temperature (℃)" dataKey="temp" stroke="#8884d8" />
            </LineChart>
        )
}

export default WeatherChart