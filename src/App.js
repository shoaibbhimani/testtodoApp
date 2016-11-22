import React, { Component } from 'react';
import './App.css';

import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

class Todo extends Component {
    constructor(){
      super();
      this.state = {
          todos:[]
      };

      this.addTodo = this.addTodo.bind(this);
      this.editTodo = this.editTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(content){
        let todos  = this.state.todos;
        todos.push(content);
        this.setState({
            todos:todos
        });
    }

    editTodo(index, newContent){
        let todos  = this.state.todos;
        todos[index].content = newContent;
        this.setState({
            todos:todos
        });
    }

    removeTodo(index){
        let todos  = this.state.todos;
        todos.splice(index,1);

        this.setState({
            todos:todos
        });
    }

  render() {
    return (
      <section>
          <AddTodo addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} editTodo={this.editTodo} removeTodo={this.removeTodo} />

      </section>
    );
  }
}

export default Todo;
