import React, { Component } from 'react';
import TodoList from './components/TodoList';
import NewItem from './components/NewItem';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: "",
      todoItems: [
        {item: "Thiết kế giao diện", isComplete: true},
        {item: "Thiết kế thuật toán", isComplete:false},
        {item: "Viết code", isComplete: false},
        {item: "Check code", isComplete: false}
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onItemClick(index) {
    let {todoItems} = this.state;
    return () => {
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {item: todoItems[index].item, isComplete:!todoItems[index].isComplete},
          ...todoItems.slice(index+1)
        ]
      });
    }
  }

  onKeyUp(event) {
    let item = event.target.value;
    if (event.keyCode === 13 && item.trim() !== "") {
      this.setState({
        todoItems: [
            {item, isComplete:false},
            ...this.state.todoItems
          ]
        })
    }
  }

  render() {
    let {todoItems} = this.state;
    return(
      <div className="App">
        <NewItem onKeyUp={this.onKeyUp}/>
        {/*TodoList*/
          todoItems.map((todoItem, index) => 
          <TodoList key={index} todoItem={todoItem} onClick={this.onItemClick(index)}/>)
        }
      </div>
    )
  }
}

export default App;