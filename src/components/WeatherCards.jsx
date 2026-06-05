function WeatherCard({data}) {

    const latest = data[0]._source;

    return (
        <div>
            <p>Temperature: {latest.TA1_0} ℃</p>
            <p>Wind speed: {latest.FF0_0} m/s</p>
            <p>Humidity: {latest.UU0_0} %</p>
            <p>Air pressure: {latest.PO0_0} hPa</p>
        </div>
    )
}

export default WeatherCard;