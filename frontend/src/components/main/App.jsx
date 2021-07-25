import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Logo from '../templates/Logo'
import Nav from '../templates/Nav'
import Footer from '../templates/Footer'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'

export default function App(props) {
  return (
    <HashRouter>
      <div className="app">
        <Logo/> 
        <Nav/>
        <Routes />
        <Footer/>
      </div>
    </HashRouter>
  )
}
