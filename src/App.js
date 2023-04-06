import React from 'react'
import GridColor from './components/GridColor'

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="pt-4 pb-3 text-center fs-2">Gradient Color Generator</h1>
        <GridColor />
      </div>
    </>
  )
}

export default App