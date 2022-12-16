import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import OrderImpReg from './pages/OrderImpReg'
import OrderImpShuttle from './pages/OrderImpShuttle'
import PostView from './pages/PostView'
import FormTest from './components/Order/FormTest'
import StyleTest from './pages/StyleTest'

function App() {
  return (
    <div>
      <div>
        <h1>
          <nav>
            <Link to="/">Home</Link> {' | '}
            <Link to="/importReg">IMP-REG</Link>{' | '}
            <Link to="/importshu">IMP-SHUTTLE</Link>{' | '}
            <Link to="/postview">TEST</Link> {' | '}
            <Link to="/formtest">FormTest</Link> {' | '}
            <Link to="/styletest">StyleTest</Link>

           
          </nav>
        </h1>
      </div>
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/importReg" element={<OrderImpReg />} />
          <Route path="/importshu" element={<OrderImpShuttle />} />
          <Route path="/postview" element={<PostView />} />
          <Route path="/formtest" element={<FormTest />} />
          <Route path="/styletest" element={<StyleTest />} />


        </Routes>
      </div>
    </div>
  )
}

export default App
