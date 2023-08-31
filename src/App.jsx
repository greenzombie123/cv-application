import TopInfoSection from './components/TopInfoSection/TopInfoSection'
import "./App.css"
import { useState } from 'react'
import SideInfoSection from './components/SideInfoSection/SideInfoSection'
import MainInfoSection from './components/MainInfoSection/MainInfoSection'

function App() {
  const [hasSubmit, setHasSubmit] = useState(false)

  return (
    <div className='App'>
      <TopInfoSection hasSubmit={hasSubmit}/>
      <SideInfoSection hasSubmit={hasSubmit}/>
      <MainInfoSection hasSubmit={hasSubmit}/>
    </div>
  )
}

export default App
