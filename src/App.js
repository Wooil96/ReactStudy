import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import OrderImpReg from './pages/OrderImpReg'
import OrderImpShuttle from './pages/OrderImpShuttle'

function App() {
  return (
    <div>
      <div>
        <h1>
          <nav>
            <Link to="/">Home</Link> {' | '}
            <Link to="/importReg">IMP-REG</Link>{' | '}
            <Link to="/importshu">IMP-SHUTTLE</Link>{' | '}
            {/* <Link to="/expenses">Expenses</Link> {' | '}
          <Link to="/postMain">PastMain</Link> */}
          </nav>
        </h1>
      </div>
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/importReg" element={<OrderImpReg />} />
          <Route path="/importshu" element={<OrderImpShuttle />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
