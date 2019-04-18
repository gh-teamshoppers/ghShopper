import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import {HomePage} from './components/Homepage'
import AllCoffees from './components/AllCoffees'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllCoffees />
      {/* <HomePage /> */}
    </div>
  )
}

export default App
