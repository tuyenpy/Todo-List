import React, { Component} from 'react';
import classNames from 'classnames';

import './TodoList.css';

class TodoList extends Component {
    render() {
        let {todoItem, onClick} = this.props;
        return(
            <div className={classNames("TodoList",
             {"TodoList-isComplete": todoItem.isComplete})}>
                <input type="checkbox" onClick={onClick}></input>
                <p>
                    {todoItem.item}
                </p>
            </div>
        )
    }
}

export default TodoList;