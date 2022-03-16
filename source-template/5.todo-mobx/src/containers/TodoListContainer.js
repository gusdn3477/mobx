import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class TodoListContainer extends Component {
  render(){

    // get todos의 결과값을 받게 됨
    const { todos } = this.props.todoStore;
    console.log(todos);
    return (
      <TodoListView 
      todos = { todos }/>
    )
  }
}

export default TodoListContainer;