import React from 'react'
import { useState } from 'react';

function TestInput({onCreate}) {
  // const handleChange = (e) => {
  //   props.getData(e.target.value)
  //   console.log(e.target.value)
  // }

  const [state, setState] = useState({
    billto:"",
    mbl: "",
  })


  // const [basicValues, setBasicValues] = useState({
  //   billto: '',
  //   mbl: '',
  // })


  const handleChangeState = (e) => {
    setState({
      ...state, // 기존의 input 객체를 복사한 뒤
      [e.target.className]: e.target.value // name 키를 가진 값을 value 로 설정
    });
    onCreate(state.billto, state.mbl);
    console.log("e.target.value : " + e.target.value)
    console.log("state.billto : " + state.billto)
  };

  const onClick = () => {
    console.log(state.billto)
  }
  


  return (
    <div className="App">
      <form>
        <input
          type={'text'}
          className="billto"
          onChange={handleChangeState}
          value={state.billto}
          placeholder="BILLTO"
        />
        <input
          type={'text'}
          className="mbl"
          id="mbl"
          onChange={handleChangeState}
          value={state.billto}
          placeholder="MBL"
        />
      </form>
      <button onClick={onClick}>Button</button>
    </div>
  )
}

export default TestInput
