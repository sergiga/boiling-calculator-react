import React, { Component } from 'react'

import TemperatureInput from './TemperatureInput.js'

export default class BoilingCalculator extends Component {
  constructor() {
    super()

    this.state = {
      temperature: '',
      scale: null
    }
  }

  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}