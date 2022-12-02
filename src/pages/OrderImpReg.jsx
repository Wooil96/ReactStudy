import React from 'react'
import { useState } from 'react'
import ImpBasic from '../components/Order/ImpBasic'
import ImpCont from '../components/Order/ImpCont'

function OrderImpReg() {
  return (
    <div>
      <div >
        <ImpBasic />
      </div>
      <div>
        <ImpCont />
      </div>
      <div>
        <button>{"Save&Copy"}</button>
      </div>
    </div>
  )
}

export default OrderImpReg
