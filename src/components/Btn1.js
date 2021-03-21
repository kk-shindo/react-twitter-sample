import React, { Component } from 'react'

export default class Btn1 extends Component {
  constructor(props) {
    super()
  }

  render () {
    const { text } = this.props

    return (
      <button
        type="submit"
        className="c-btn1"
      >
        {text}
      </button>
    )
  }
}
