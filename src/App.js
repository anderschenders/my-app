import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
  render() {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
          />
          <label>
            {this.props.title}
          </label>
          <button className="destroy" />
        </div>
        <input
          ref="editField"
          className="edit"
        />
      </li>
    )
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: '',

    }
  }

  onKeyUp = event => {
    console.log(event);
    if (event.keyCode === 13) {
      this.setState({
        todos: [...this.state.todos, {title: this.state.newTodo}],
        newTodo: '',
      })
    }
  }

  onChange = event => {
    this.setState({
      newTodo: event.target.value
    })
  }

  render() {
    const tasks = [
      "first",
      "second",
    ]
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyUp={this.onKeyUp}
            value={this.state.newTodo}
            onChange={this.onChange}/>
        </header>
        <ul className="todo-list">
        {this.state.todos.map(task => (
          <TodoItem key={task.title} title={task.title}/>
        ))}
        </ul>
      </section>
    );
  }
}

export default App;
