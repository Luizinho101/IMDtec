import React, { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Clock2() {
  const [data, setData] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setData(new Date())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Hello, world!</h1>
      <h2>It is {data.toLocaleTimeString()}</h2>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock2 />
  </StrictMode>,
)