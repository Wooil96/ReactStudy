import React from 'react'

function ImpCont() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>SEAL</td>
            <td colSpan={2}>
              <input type="text" name="ordSeal" />
            </td>
            <td colSpan={3}>COMMODITY</td>
            <td colSpan={2}>
              <input type="text" name="ordcommodity" />
            </td>
          </tr>
          <tr>
            <td>WGT</td>
            <td colSpan={3}>
              <input type="text" name="ordWgt" />
            </td>
            <td>QTY</td>
            <td colSpan={3}>
              <input type="text" name="ordQty" />
            </td>
            <td>UNIT</td>
            <td colSpan={3}>
              <input type="text" name="ordUnit" />
            </td>
          </tr>
          <tr>
            <td>SEND TO</td>
            <td colSpan={9}>
              <input type="text" name="ordSendTo" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ImpCont
