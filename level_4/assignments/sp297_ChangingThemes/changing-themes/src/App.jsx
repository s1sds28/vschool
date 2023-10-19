import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'


function App() {

  return (
    <>
      <div className='app-container'>
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
