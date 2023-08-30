import TopInfoSection from './components/TopInfoSection/TopInfoSection'
import "./App.css"
import { useState } from 'react'

function App() {
  const [hasSubmit, setHasSubmit] = useState(true)

  return (
    <div className='App'>
      const
      <TopInfoSection hasSubmit={hasSubmit}/>
    </div>
  )
}

export default App
