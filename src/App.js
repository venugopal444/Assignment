import React from 'react'
import SprintsBarChart from './components/SprintsBarChart/SprintsBarChart'
import SprintsCard from './components/SprintsCard/SprintsCard'
import SprintsTable from './components/SprintsTable/SprintsTable'
import StreamedAreasChart from './components/StreamedAreaChart/StreamedAreasChart'


const App = () => {
  return (
    <div>
      <SprintsBarChart/>
      <SprintsCard />
      <SprintsTable />
      <StreamedAreasChart />
      
    </div>
  )
}

export default App