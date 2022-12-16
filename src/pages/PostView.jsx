import { useSlotProps } from '@mui/base'
import { mobileStepperClasses } from '@mui/material'
import { propsToAttrMap } from '@vue/shared'
import { Button, Form } from 'antd'
import React from 'react'
import { useState } from 'react'
import TestInput from '../components/Order/TestInput'

function PostView() {
  // const [testChar, setTestChar] = useState("");

  const [basicValues, setBasicValues] = useState({
    billto: '',
    mbl: '',
  })

  const [data, setData] = useState([])

  // const onCreate = (billto, mbl) => {
  //     const newItem = {
  //         billto,
  //         mbl
  //     }
  //     console.log("On Create new Item : " + JSON.stringify(newItem))
  //     setData([...data, newItem])
  // }

  const onCreate = (state) => {
    console.log('On Create new Item : ' + JSON.stringify(state))
    setData([...data, state])
  }

  // constructor(props)

  //   const getData = (char) => {
  //     console.log("Parent GetData" + char)
  // }

  const onClick = () => {
    console.log('onclick' + ' ' + JSON.stringify(data))
    console.log(data.billto)
    console.log(data.mbl)
  }
  // const handleChange = (e) => {
  //     setBasicValues(e.target.value)
  //     console.log(e.target.value)
  //     setBasicValues({
  //       ...basicValues,
  //       [e.target.className]: e.target.value,
  //     })
  //   }

  return (
    <div>
      <Form>
        <TestInput onChange={(value) => setData({ ...data, ...value })} />

        {/* <input className='inputtest' value={basicValues} disabled /> */}

        <Form.Item>
          <Button htmlType="submit" onClick={onClick}>
            {'Save&Copy'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default PostView
