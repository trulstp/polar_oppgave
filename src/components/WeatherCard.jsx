import './WeatherCard.css'

function WeatherCard({ data }) {
  const latest = data[0]._source

  const measurements = [
    { label: 'Temperature', value: latest.TA1_0, unit: '°C', spoken: `${latest.TA1_0} degrees Celsius` },
    { label: 'Wind speed', value: latest.FF0_0, unit: 'm/s', spoken: `${latest.FF0_0} metres per second` },
    { label: 'Humidity', value: latest.UU0_0, unit: '%', spoken: `${latest.UU0_0} percent` },
    { label: 'Air pressure', value: latest.PO0_0, unit: 'hPa', spoken: `${latest.PO0_0} hectopascal` },
  ]

  return (
    <ul className="cards" aria-label="Current weather measurements">
      {measurements.map((m) => (
        <li key={m.label} className="card" tabIndex={0}>
          <span className="card-label" aria-hidden="true">{m.label}</span>
          <span className="card-value" aria-label={`${m.label}: ${m.spoken}`}>
            {m.value} <span className="card-unit" aria-hidden="true">{m.unit}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default WeatherCard