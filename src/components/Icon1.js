import React, { Component } from 'react'

export default class Icon1 extends Component {
  constructor(props) {
    super()
  }

  render() {
    const { src } = this.props

    return (
      <div className="c-icon1">
        <img src={src} alt="" className="c-icon1__img" />
      </div>
    )
  }
}
