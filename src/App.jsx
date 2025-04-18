import { useState } from 'react'
import viteLogo from '/vite.svg'
import "./App.css"
import Sidebar from './Compononts/Sidebar'
import Gigs from './Compononts/Gigs'
import Nav from './Compononts/Nav'
import Orders from './Compononts/Orders'
import Earnings from './Compononts/Earnings'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from './Compononts/Dashboard'

function App() {

  return (
    <>
      <div className="main">
        <div className="dashBoard">
        <Sidebar/>
        <div className="dashboard-main">
          <Nav/>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/gigs' element={<Gigs/>}/>
            <Route path='/dashboard/earnings' element={<Earnings/>}/>
            <Route path='/dashboard/orders' element={<Orders/>}/>
          </Routes>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
