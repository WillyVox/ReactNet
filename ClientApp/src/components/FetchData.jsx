import { useEffect, useState } from "react"

const FetchData = () => {
    const [data, setData] = useState({
        forecasts: [], loading: true
    });

    useEffect(() => {
        fetch('api/SampleData/WeatherForecasts')
        .then(response => response.json())
        .then(data => {
            setData({ forecasts: data, loading: false });
        });
    }, [])
    if (data.loading) {
        return <p><em>Loading...</em></p>
    }

    return <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {data.forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
}

export default FetchData;