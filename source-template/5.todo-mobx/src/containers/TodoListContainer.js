import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {

  onSelectedTodo(todo){
    this.props.todoStore.selectedTodo(todo);
  }

  render(){

    // get todos의 결과값을 받게 됨
    const { todos } = this.props.todoStore;
    
    return (
      <TodoListView 
      todos = { todos }
      onSelectedTodo = { this.onSelectedTodo }
      />
    )
  }
}

export default TodoListContainer;