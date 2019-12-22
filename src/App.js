import React, { Component } from 'react';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems: [
        {item: "Thiết kế giao diện", isComplete: false},
        {item: "Thiết kế thuật toán", isComplete:false},
        {item: "Viết code", isComplete: false},
        {item: "Check code", isComplete: false}
      ]
    }
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

  render() {
    let {todoItems} = this.state;
    console.log(todoItems);
    return(
      <div className="App">
        {/*TodoList*/
          todoItems.map((todoItem, index) => 
          <TodoList key={index} todoItem={todoItem} onClick={this.onItemClick(index)}/>)
        }
      </div>
    )
  }
}

export default App;