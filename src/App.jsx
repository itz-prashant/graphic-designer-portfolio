import React from 'react'
import Main from './Components/Main'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import { AppContext } from './Components/ContextApi'

const App = () => {
  return (
    <AppContext>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}/> 
      <Route path='/contact' element={<Contact />}/> 
    </Routes>
    </BrowserRouter>
    </AppContext>
  )
}

export default App