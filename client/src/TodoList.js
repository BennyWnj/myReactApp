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
                    {this.props.todos.map((task, index) => <Todo task={task.taskText}
                                            completed={task.completed}
                                            xClick={() => this.props.todoXClick(index)}/>)}
                </ul>
            </div>
        )
    }
}

export default TodoList;