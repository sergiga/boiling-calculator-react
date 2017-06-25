import React, { Component } from 'react'

import TemperatureInput from './TemperatureInput.js'

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
    return (
      <div>
        <TemperatureInput 
          scale="c"
          onTemperatureChange = { this.onTemperatureChange } 
        />
        <TemperatureInput 
          scale="f"
          onTemperatureChange = { this.onTemperatureChange } 
        />
      </div>
    )
  }
}