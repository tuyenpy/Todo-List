import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItems.css';

class TodoItem extends Component {
    render() {
        let { item } = this.props;
        return(
            <div className={ classNames("Todo-Item", {" Todo-Item-isComplete": item.isComplete}) }>
                <p> {item.title} </p>
            </div>
        )
    }
}

export default TodoItem;