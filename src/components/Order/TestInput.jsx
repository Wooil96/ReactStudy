import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form, Input, Button } from 'antd'

// export let test = 0

function TestInput(props) {
  // const handleChange = (e) => {
  //   props.getData(e.target.value)
  //   console.log(e.target.value)
  // }

  const [state, setState] = useState({
    billto: '',
    mbl: '',
  })

  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    props.onChange(state)
  }, [state])

  const onChange = (e) => {
    console.log(e.target.id)
    console.log()
    setState({
      ...state, // 기존의 input 객체를 복사한 뒤
      [e.target.id]: e.target.value, // name 키를 가진 값을 value 로 설정
    })
  }

  const onClick = () => {
    console.log('Component onClick : ' + JSON.stringify(state))
    console.log(state.billto)
  }

  return (
    <div className="App">
     
        <Form.Item
          name={'billto'}
          rules={[
            {
              required: true,
              message: 'Please input BILLTO',
            },
          ]}
        >
          <Input
            placeholder="BILLTO"
            onChange={onChange}
            id="billto"
            value={state.billto}
          />
        </Form.Item>
        {/* <Input
          type={'text'}
          id="mbl"
          onChange={onChange}
          value={state.mbl}
          placeholder="MBL"
          required
        /> */}
        <Form.Item>
          <Button htmlType='submit'>Button</Button>
        </Form.Item>
    </div>
  )
}

export default TestInput
