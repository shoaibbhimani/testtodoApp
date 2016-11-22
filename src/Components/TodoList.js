import React from 'react';
import Sortable from 'react-sortablejs';
import TodoItem from './TodoItem';

class TodoList extends  React.Component {
    constructor(){
        super();
        this.renderTodos = this.renderTodos.bind(this);
        this.changeeditingMode = this.changeeditingMode.bind(this);
        this.state = {
            editingMode:false
        }
    }

    changeeditingMode(){
        this.setState({
            editingMode:!this.state.editingMode
        });
    }
    renderTodos(){
        return this.props.todos.map(( todo, index) => <TodoItem changeeditingMode={this.changeeditingMode} removeTodo={this.props.removeTodo} editTodo={this.props.editTodo} index={index} details={todo} key={todo.id} ref='editable' /> )
    }

    render(){
        return(
            <div>
                <Sortable
                    tag="div" // Defaults to "div"
                    options={{
                        onMove:function (/**Event*/evt, /**Event*/originalEvent) {
                            //return false
                        }
                    }}


                >
                    {this.renderTodos()}
                </Sortable>
            </div>
        )
    }
}


export default TodoList;
