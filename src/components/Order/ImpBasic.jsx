import React from 'react'
import { useState } from 'react'

function ImpBasic() {
  const CONTOPTIONS = [
    { value: '40ST', name: '40ST' },
    { value: '20ST', name: '20ST' },
    { value: '40HC', name: '40HC' },
    { value: '45', name: '45' },
    { value: '48', name: '48' },
    { value: '53', name: '53' },
    { value: 'TRL', name: 'TRL' },
  ]

  const TYPEOPTIONS = [
    { value: 'DRY', name: 'DRY' },
    { value: 'REE', name: 'REE' },
    { value: 'OT', name: 'OT' },
    { value: 'TRI', name: 'TRI' },
    { value: 'CFS', name: 'CFS' },
    { value: 'FR', name: 'FR' },
    { value: 'FB', name: 'FB' },
  ]

  const SSLOPTIONS = [
    { value: 'ACL', name: 'ACL' },
    { value: 'ANL', name: 'ANL' },
    { value: 'APL', name: 'APL' },
    { value: 'ABL', name: 'ABL' },
    { value: 'COS', name: 'COS' },
    { value: 'SEA', name: 'SEA' },
    { value: 'SM', name: 'SM' },
  ]

  const SelectBox = (props) => {
    return (
      <select>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    )
  }



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
    wms: '',
  })

  const handleChange = (e) => {
    setBasicValues(e.target.value)
    console.log(e.target.value)
    setBasicValues({
      ...basicValues,
      [e.target.className]: e.target.value,
    })
  }

  return (
    <table>
      <tbody>
        {/* First Row */}
        <tr>
          <td colSpan={2}>BILLTO</td>
          <td colSpan={2}>MBL#</td>
          <td colSpan={2}>HOUSE BL#</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <input type="text" className="ordBillto"  onChange={handleChange}/>
          </td>
          <td colSpan={2}>
            <input type="text" className="ordMblNum" />
          </td>
          <td colSpan={2}>
            <input type="text" className="ordHouseblNum" />
          </td>
        </tr>
        {/* Second Row */}
        <tr>
          <td colSpan={2}>REF#</td>
          <td colSpan={2}>PO#</td>
          <td colSpan={2}>DELIVERY#</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <input type="text" className="ordRefNum" />
          </td>
          <td colSpan={2}>
            <input type="text" className="ordPoNum" />
          </td>
          <td colSpan={2}>
            <input type="text" className="ordDeliveryNum" />
          </td>
        </tr>
        {/* Third Row */}
        <tr>
          <td colSpan={2}>CONT#</td>

          <td>SIZE</td>
          <td>TYPE</td>

          <td>SSL</td>
          <td>VESSEL</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <input type="text" className="ordContNum" />
          </td>
          <td>
            <SelectBox options={CONTOPTIONS}></SelectBox>
          </td>
          <td>
            <SelectBox options={TYPEOPTIONS}></SelectBox>
          </td>
          <td>
          <SelectBox options={SSLOPTIONS}></SelectBox>
          </td>
          <td>
            <input type="text" className="ordVessel" />
          </td>
        </tr>

        {/* Third Row */}
        <tr>
          <td colSpan={2}>CHASSIS#</td>

          <td>POOL</td>
          <td>WMS</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <input type="text" className="ordContNum" />
          </td>
          <td>
            <input type="text" className="ordSize" />
          </td>
          <td>
            <input type="text" className="ordType" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ImpBasic
