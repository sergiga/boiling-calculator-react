import React, { Component } from 'react'

import TemperatureInput from './TemperatureInput.js'

function convertTemperature(temperature, converter) {
  const input = parseFloat(temperature)
  
  if(Number.isNaN(input)) { return '' }

  const output = converter(input)
  const rounded = Math.round(output * 1000) / 1000

  return rounded.toString()
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

export default class BoilingCalculator extends Component {
  constructor() {
    super()

    this.state = {
      scale: null,
      temperature: ''
    }

    this.onTemperatureChange = this.onTemperatureChange.bind(this)
  }

  onTemperatureChange(scale, temperature) {
    this.setState({
      scale: scale,
      temperature: temperature
    })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === "c" 
      ? temperature
      : convertTemperature(temperature, toCelsius)
    const fahrenheit = scale === "f" 
      ? temperature
      : convertTemperature(temperature, toFahrenheit)

    return (
      <div>
        <TemperatureInput 
          scale = 'c'
          temperature = { celsius }
          onTemperatureChange = { this.onTemperatureChange } 
        />
        <TemperatureInput 
          scale = 'f'
          temperature = { fahrenheit }
          onTemperatureChange = { this.onTemperatureChange } 
        />
      </div>
    )
  }
}