import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { AppContext } from './Components/ContextApi'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <AppContext>
        <Header />
        <Home />
        <About />
      </AppContext>
    </div>
  )
}

export default App