import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

function ImpValidation(props) {
  const FREEDAYS = [
    { value: 'working', name: 'working' },
    { value: 'calendar', name: 'calendar' },
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
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>ETA</td>
            <td>
              <input
                type="date"
                className="ordDeliverySch"
                defaultValue={'MM/DD/YY'}
                pattern="\d{1,2}/\d{1,2}/\d{1,2}"
              />
            </td>
          </tr>
          <tr>
            <td>AVA</td>
            <td>
                <FormControlLabel
                  control={<Checkbox />}
                  label="DSC"
                  className="ordCkDsc"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="OBL"
                  className="ordCkObl"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="CA"
                  className="ordCkCa"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="BO"
                  className="ordCkBo"
                  labelPlacement="start"
                />
                <br />
                <FormControlLabel
                  control={<Checkbox />}
                  label="CUS"
                  className="ordCkCus"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="OTH"
                  className="ordCkOth"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="NA"
                  className="ordCkNa"
                  labelPlacement="start"
                />
            </td>
          </tr>
          <tr>
            <td>LFD</td>
            <td>
              <input
                type="date"
                className="ordLfdSch"
                defaultValue={'MM/DD/YY'}
              />
            </td>
          </tr>
          <tr>
            <td>FREEDAYS</td>
            <td><input type={'number'} required /></td>
            <td>
            <SelectBox options={FREEDAYS}></SelectBox>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ImpValidation
