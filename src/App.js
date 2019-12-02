import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItems'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems: [
        { title: "Job 1", isComplete: true},
        { title: "Job 2", isComplete: false},
        { title: "Job 3", isComplete: false}
      ]
    };
    // this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(item){
    return (
      (event) => console.log(item)
    )
  }

  render() {
    let { todoItems } = this.state;
    return(
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map( (item, index) =>
           <TodoItem item={item} key={index} onClick={this.onClickItem(item)} /> )
        }
      </div>
    )
  }
}

export default App;
