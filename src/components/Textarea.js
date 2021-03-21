import React, { Component } from 'react'

export default class Textarea extends Component {
  constructor(props) {
    super()
  }

  render () {
    const { change } = this.props

    return (
      <div className="c-textarea">
        <textarea
          id="tweet"
          className="c-textarea__el"
          name="tweet"
          placeholder="tweet..."
          rows="4"
          onChange={change}
        />
      </div>
    )
  }
}
