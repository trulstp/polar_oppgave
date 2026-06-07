import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function WeatherChart({data}) {
    const chartData = [...data].reverse()
        .filter((item, index) => index % 100 === 0)
        .map(item => ({
            time: item._source.measured,
            temp: item._source.TA1_0
        }))

        return (
            <div style={{ width: '100%', height: 300 }}
            role="img"
            aria-label="Line chart showing temperature at Troll Research Station over the last 4 days"
            >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                    dataKey="time"
                    interval={15}
                    tickFormatter={(t) => new Date(t).toLocaleDateString('no', { month: 'short', day: 'numeric' })}
                    />
                    <YAxis label={{ value: '°C', position: 'insideLeft' }}/>
                    <Tooltip labelFormatter={(t) => new Date(t).toLocaleDateString('no', { month: 'short', day: 'numeric' })} />
                    <Line type="monotone" name="Temperature (℃)" dataKey="temp" stroke="#8884d8"  />
                </LineChart>
            </ResponsiveContainer>
            </div>
        )
}

export default WeatherChart