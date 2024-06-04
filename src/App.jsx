import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { AppContext } from './Components/ContextApi'
import About from './Components/About'
import BrandingAndvisualIdentity from './Components/Branding&visualIdentity'
import MArketingAnddvertisement from './Components/MArketing&Advertisement'

const App = () => {
  return (
    <div>
      <AppContext>
        <Header />
        <Home />
        <About />
        <BrandingAndvisualIdentity />
        <MArketingAnddvertisement />
      </AppContext>
    </div>
  )
}

export default App