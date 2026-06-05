import { useState, useEffect } from "react"
import WeatherCard from "./components/WeatherCards"
import WeatherChart from "./components/WeatherChart"


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
              size: 5000,
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

  console.log(console.log(data?.[0]._source)
    )
  
  return (
    <div>
      <h1>Troll Weather Station</h1>
      {data && <WeatherChart data={data} />}
      {data && <WeatherCard data={data}/>}
    </div>
  )
}

export default App