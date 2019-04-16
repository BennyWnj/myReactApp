import React, { Component } from 'react';
import Todo from "./Todo";
import "./bootstrap.min.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="navbar-nav">
                    {/*<li> <Todo task="brush teeth"/> </li>*/}
                    {/*<li> <Todo task="go to bed"/> </li>*/}
                    {/*<li> <Todo task="be a good baobao"/> </li>*/}
                    {this.props.todos.map(task => <Todo task={task.taskText}
                                            completed={task.completed}/>)}
                </ul>
            </div>
        )
    }
}

export default TodoList;