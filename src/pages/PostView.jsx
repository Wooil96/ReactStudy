import { useSlotProps } from '@mui/base';
import { mobileStepperClasses } from '@mui/material';
import { propsToAttrMap } from '@vue/shared';
import React from 'react';
import { useState } from 'react';
import TestInput from '../components/Order/TestInput';

function PostView() {

    // const [testChar, setTestChar] = useState("");

    const [basicValues, setBasicValues] = useState({
        billto: '',
        mbl: '',
      })

    const [data, setData] = useState([]);

    // const onCreate = (billto, mbl) => {
    //     const newItem = {
    //         billto,
    //         mbl
    //     }
    //     console.log("On Create new Item : " + JSON.stringify(newItem))
    //     setData([...data, newItem])
    // }

    const onCreate = (state) => {
        
        console.log("On Create new Item : " + JSON.stringify(state))
        setData([...data, state])
    }

    // constructor(props)

    //   const getData = (char) => {
    //     console.log("Parent GetData" + char)
    // }

    const onClick = () => {
        console.log("onclick" + " " + JSON.stringify(basicValues))
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
        <div>f
            <TestInput 
             onCreate={onCreate} onChange={value =>  setBasicValues({...basicValues, ...value})} />   

            {/* <input className='inputtest' value={basicValues} disabled /> */}

            <button onClick={onClick}>{'Save&Copy'}</button>

        </div>

);
}

export default PostView;