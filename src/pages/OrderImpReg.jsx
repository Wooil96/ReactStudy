import React from 'react'
import { useState } from 'react'
import ImpBasic from '../components/Order/ImpBasic'
import ImpCont from '../components/Order/ImpCont'
import ImpFileInput from '../components/Order/ImpFileInput'
import ImpSche from '../components/Order/ImpSche'

function OrderImpReg(props) {
  console.log(props.ordCont)

  const handleCreate = (data) => {
    console.log(data.basicValues.billto)
  }
  return (
    <div>
      <div >
        <ImpBasic onChange={handleCreate}/>

      </div>
      <div>
        <ImpCont />
      </div>
      <div>
        <ImpSche />
      </div>
      <div>
        <ImpFileInput />
      </div>
      <div>
        <button onClick={handleCreate}>{"Save&Copy"}</button>
      </div>
    </div>
  )
}

export default OrderImpReg
