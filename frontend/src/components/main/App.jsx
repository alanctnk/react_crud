import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Logo from '../templates/Logo'
import Nav from '../templates/Nav'
import Main from '../templates/Main'
import Footer from '../templates/Footer'

export default function App(props) {
  return (
    <div className="app">
      <Logo/> 
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}
