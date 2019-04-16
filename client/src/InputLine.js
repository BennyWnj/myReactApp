import React, { Component } from 'react';
import "./bootstrap.min.css";

class InputLine extends Component {
    render() {
        return (
            <form>
                <div className="navbar-header">
                    <input type="text" value="task"/>
                    <button>Add todo</button>
                </div>
            </form>
        )
    }
}

export default InputLine;