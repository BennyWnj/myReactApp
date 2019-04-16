import React, { Component } from 'react';
import InputLine from "./InputLine";
import TodoList from "./TodoList";
import "./bootstrap.min.css";

//cd server/ && npm start
const tasks = [{taskText: "brush teeth", completed: false},
    {taskText: "go to bed", completed: true},
    {taskText: "be a good baoba", completed:true}];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    this.setState({todos: tasks})
  }


  render() {
    return (
      <div>
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
