import React from 'react';

class TodoItem extends React.Component {

    constructor(){
        super();


        this.handleClick = this.handleClick.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            editable:false
        }

    }

    onChange(e){
        e.stopPropagation();
        return false;

    }

    deleteTodo(e){
        (e) && (e.preventDefault());
        this.props.removeTodo(this.props.index);
    }
    clearForm(e){
        (e) && (e.preventDefault());
        this.setState({
            editable:false
        });
        this.props.changeeditingMode();
    }

    handleClick(e){
        (e) && (e.preventDefault());
        this.setState({
            editable:true
        });

        this.props.changeeditingMode();
    }

    handleSubmit(e) {
        (e) && (e.preventDefault());
        this.props.editTodo(this.props.index, this.refs.todoValue.value);
        this.clearForm();
    }
    renderItem(){

        if(this.state.editable) {
            return(
                <section className="item">
                    <form onSubmit={this.handleSubmit}>
                        <input className="todoItem" ref="todoValue" onChange={this.onChange} defaultValue={this.props.details.content} />
                        <button className="btn todoOk" type="submit">ok</button>
                        <button className="btn todoCancel" onClick={this.clearForm}>cancel</button>
                    </form>
                </section>
            )
        } else {
            return(
                <div className="todoItemWrapper" onClick={this.handleClick}>
                    <span className="todoItem"> {this.props.details.content} </span>
                    <button className="btn todoBtn" onClick={this.deleteTodo }>Delete </button>
                </div>
            )
        }

    }
    render(){
        return(
            <section className='todoRow'>
                {this.renderItem()}
            </section>

        )
    }

}


export default TodoItem;