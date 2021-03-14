import React, { Component } from 'react'
import './App.css'
import TestComponent from './TestComponent'

/*
* TODO:
* - アカウント機能
* - DB連携
*/

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      todoList: JSON.parse(localStorage.getItem('todoList')) || []
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  submitHandler(e) {
    const { title, description, todoList } = this.state

    e.preventDefault()
    if (title && description) {
      this.setState({
        title: '',
        description: '',
        todoList: todoList.concat({
          title: title,
          description: description
        })
      }, () => {
        e.target.elements.title.value = ''
        e.target.elements.description.value = ''

        localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
      })
    }
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  clickHandler(todo) {
    const { todoList } = this.state
    this.setState({
      todoList: todoList.filter((x) => x !== todo)
    }, () => {
      localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
    })
  }

  render() {
    const { todoList } = this.state

    return (
      <div className="App">
        <form
          className="App-form"
          onSubmit={this.submitHandler}
        >
          <div>
            <input
              id="title"
              name="title"
              placeholder="title"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              id="description"
              name="description"
              placeholder="description"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button
              type="submit"
            >
              登録
            </button>
          </div>
        </form>
        {todoList.map((todo, i) => (
          <TestComponent
            key={i}
            title={todo.title}
            description={todo.description}
            onClick={() => {this.clickHandler(todo)}}
          />
        ))}
      </div>
    )
  }
}
