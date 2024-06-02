import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { AppContext } from './Components/ContextApi'

const App = () => {
  return (
    <div>
      <AppContext>
        <Header />
        <Home />
      </AppContext>
    </div>
  )
}

export default App