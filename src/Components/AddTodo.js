

import React from 'react';

import shortid from 'shortid';


class AddTodo extends  React.Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let todo = {
            content:this.todo.value,
            id:shortid.generate()
        };

        this.props.addTodo(todo);
        this.refs.formSubmit.reset();
    }

    render(){
        return (
            <section className="addForm">
                <form ref='formSubmit' onSubmit={this.onSubmit}>
                    <label htmlFor="">
                        <input  placeholder="Enter Item in Your Todo List " className="formInput" type="text" ref={ input => this.todo = input }/>
                        <button className="formButton" type="submit">Submit</button>
                    </label>
                </form>
            </section>
        )
    }
}


export default  AddTodo;