import React from 'react'

export default function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Set the temperature in { props.scale }</legend>
      <input type="text" name = {props.scale } onChange = { (e) => {
          props.onTemperatureChange(e.target.name, e.target.value)
        } 
      } />
    </fieldset>
  )
}