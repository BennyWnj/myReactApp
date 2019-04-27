import React, { Component } from 'react';
import InputLine from "./InputLine";
import TodoList from "./TodoList";
import axios, {AxiosRequestConfig as response} from 'axios'
import "./bootstrap.min.css";

//cd server/ && npm start
// let tasks = [{taskText: "brush teeth", completed: false},
//     {taskText: "go to bed", completed: true},
//     {taskText: "be a good baoba", completed:true}];

const apiUrl = "/todos";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount() {
    axios
        .get(apiUrl + "/all")
        // .then(console.log)
        .then(({data}) => this.setState({todos: data}))
        // .then(({data}) => console.log(data))
        .catch(console.log);
  }

  addTodo(task) {
      axios
          .post(apiUrl + "/add", task)
          .then(
              // this.setState({ todos: this.state.todos.concat(response.data)})
               _ => axios.get(apiUrl + "/all")
          //     ({ data }) =>
          //           ({data}) => this.setState({todos: data})
          //     // console.log(data)
          )
          .then(({data}) => this.setState({todos : data}))
          // .then(console.log(this.state.todos))
          .catch(console.log);
      // tasks.push({taskText: task, completed: false});
      // this.setState({todos: tasks});
  }

  removeTodo(id) {
      axios
          .post(apiUrl + "/remove", id)
          .then(_ => {
              this.setState(state => ({
                  todos: state.todos.filter(cur => cur._id !== id)
              }));
          })
          .catch(console.log);
      // tasks.splice(index, 1);
      // this.setState({todos: tasks});
  }



  render() {
    return (
      <div>
        <InputLine onSubmit={this.addTodo}/>
        <TodoList todos={this.state.todos}
                    todoXClick={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
