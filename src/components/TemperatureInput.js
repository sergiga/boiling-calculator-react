import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

export default function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Set the temperature in { scaleNames[props.scale] }</legend>
      <input 
        type="text" 
        name = { props.scale }
        value = { props.temperature } 
        onChange = { (e) => {
          props.onTemperatureChange(e.target.name, e.target.value)
        } 
      } />
    </fieldset>
  )
}