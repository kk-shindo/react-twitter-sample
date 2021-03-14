import React from 'react'

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello World!',
            tweet: 'test'
        }
    }
    setValue(value) {
        this.state.tweet = value
    }
    handleChange(e) {
        const value = e.target.value
        console.log(value)
        this.setValue(value)
    }
    render() {

        return (
            <div>
                <h1>{this.state.message}</h1>
                <input type="text" name="tweet" value={this.state.tweet} placeholder="test" onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}

