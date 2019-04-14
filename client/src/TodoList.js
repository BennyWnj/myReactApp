import React, { Component } from 'react';
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li> <Todo task="brush teeth"/> </li>
                    <li> <Todo task="go to bed"/> </li>
                    <li> <Todo task="be a good baobao"/> </li>
                </ul>
            </div>
        )
    }
}

export default TodoList;