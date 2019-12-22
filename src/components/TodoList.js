import React, { Component} from 'react';
import classNames from 'classnames';

import checkItem from '../img/check.svg';
import checkedItem from '../img/checked.svg';

import '../style/TodoList.css';

class TodoList extends Component {
    render() {
        let {todoItem, onClick} = this.props;
        let src = (todoItem.isComplete) ? checkedItem: checkItem;
        return(
            <div className={classNames("TodoList",
             {"TodoList-isComplete": todoItem.isComplete})}>
                <img src={src} alt="check" onClick={onClick}></img>
                <p>
                    {todoItem.item}
                </p>
            </div>
        )
    }
}

export default TodoList;