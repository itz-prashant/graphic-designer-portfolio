import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { AppContext } from './Components/ContextApi'
import About from './Components/About'
import BrandingAndvisualIdentity from './Components/Branding&visualIdentity'

const App = () => {
  return (
    <div>
      <AppContext>
        <Header />
        <Home />
        <About />
        <BrandingAndvisualIdentity />
      </AppContext>
    </div>
  )
}

export default App