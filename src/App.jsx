import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherChart from "./components/WeatherChart";
import './index.css';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://app.npolar.no/opensearch/weather-troll-station/_search',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              size: 7000,
              sort: [{ measured: { order: 'desc' } }],
              query: {
                range: {
                  measured: { gte: 'now-4d/d' }
                }
              }
            })
          }
        )
        if (!response.ok) throw new Error(`Error: ${response.status}`)
        const result = await response.json()
        setData(result.hits.hits)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  
  if (loading) return <main><p aria-live="polite">Loading weather data...</p></main>
  if (error) return <main><p role="alert">Something went wrong: {error}</p></main>

  return (
    
    <main>
      <h1>Troll Weather Station</h1>
      <p>Latest weather data from Troll Research Station, Antarctica</p>
      <p className="last-updated">{"Last updated: "}
        <time dateTime={data[0]._source.measured}>
          {new Date(data[0]._source.measured).toLocaleString('en', { 
            day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
          })}
        </time>
      </p>
      <section aria-label="Current weather at Troll Weather Station">
        <WeatherCard data={data}/>
        <WeatherChart data={data}/>
      </section>
    </main>
  )
}

export default App