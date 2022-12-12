import React from 'react'
import { useState } from 'react'
import { BaseTransition } from 'vue'
import ImpBasic from '../components/Order/ImpBasic'
import ImpCont from '../components/Order/ImpCont'
import ImpFileInput from '../components/Order/ImpFileInput'
import ImpSche from '../components/Order/ImpSche'
import ImpValidation from '../components/Order/ImpValidation'
import OrdRemark from '../components/Order/OrdRemark'

function OrderImpReg() {
  const [basicValues, setBasicValues] = useState({
    billto: '',
    mbl: '',
    housebl: '',
    ref: '',
    po: '',
    delivery: '',
    cont: '',
    size: '',
    type: '',
    ssl: '',
    vessel: '',
    chassis: '',
    pool: '',
    wms: false,
  })

  const handleCreate = () => {
    console.log(basicValues)
  }
  return (
    <div>
      <div>
        <ImpBasic setBasicValues={basicValues} />
      </div>
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <div>
        <ImpValidation />
      </div>
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <div>
        <ImpCont />
      </div>
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <div>
        <OrdRemark />
      </div>
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <div>
        <ImpSche />
      </div>
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <div>
        <ImpFileInput />
      </div>
      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
      

      <div>
        <button onClick={handleCreate}>{'Save&Copy'}</button>
      </div>
    </div>
  )
}

export default OrderImpReg
