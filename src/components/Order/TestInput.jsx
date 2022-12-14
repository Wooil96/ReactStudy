import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

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

  const [basicValues, setBasicValues] = useState({
    billto: '',
    mbl: '',
  })
  useEffect(() => {
    props.onChange(state)

  }, [state])


  const onChange = (e) => {
    setState({
      ...state, // 기존의 input 객체를 복사한 뒤
      [e.target.className]: e.target.value, // name 키를 가진 값을 value 로 설정
    });
  }

  const onClick = () => {
    console.log('Component onClick : ' + JSON.stringify(state))
    console.log(state.billto)
  }

  return (
    <div className="App">
      <form>
        <input
          type={'text'}
          className="billto"
          onChange={onChange}
          value={state.billto}
          placeholder="BILLTO"
        />
        <input
          type={'text'}
          className="mbl"
          id="mbl"
          onChange={onChange}
          value={state.mbl}
          placeholder="MBL"
        />
      </form>
      <button onClick={onClick}>Button</button>
    </div>
  )
}

export default TestInput
