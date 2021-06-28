import React, { Component } from 'react'
import axios from 'axios'

export default class GetSvg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      svg: null
    }
  }

  componentDidMount() {
    const { path } = this.props

    if (path.indexOf('.svg') > -1) {
      axios.get(path)
        .then(function (res) {
          this.setState({svg: res.data})
        }.bind(this))
        .catch(function (err)  {
          console.error(err)
        }.bind(this))
    }
  }

  render() {
    const { path, className, alt } = this.props
    const { svg } = this.state
    return svg
      ? <span dangerouslySetInnerHTML={{ __html: svg }} className={ className } />
      : <img  src={path} alt={alt} {...this.props} />
  }
}
