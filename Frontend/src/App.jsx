import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)
  
  // You would typically use an environment variable here like import.meta.env.VITE_API_URL
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  useEffect(() => {
    axios.get(`${apiUrl}/api/test`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React + Node Deploy Test</h1>
      {data ? (
        <div style={{ background: '#e0ffe0', padding: '1rem', borderRadius: '8px' }}>
          <h3>Backend Response:</h3>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Message:</strong> {data.data}</p>
        </div>
      ) : (
        <p>Loading data from backend...</p>
      )}
    </div>
  )
}

export default App
