import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import todo from './todo.json';
import FormToDo from '../FormToDo/FormToDo';

class ToDoList extends Component {
    state = {
        todoList: todo,
        isDelete: false,
        isCreate: false,
    }

    componentDidUpdate(_, prevState) {
        if (prevState.todoList.length > this.state.todoList.length) {
            this.setState({ isDelete: true });
            setTimeout(() => {
                this.setState({ isDelete: false });
            }, 1500);
        }
        if (prevState.todoList.length < this.state.todoList.length) {
            this.setState({ isCreate: true });
            setTimeout(() => {
                this.setState({ isCreate: false });
            }, 1500);
        }
    }

    handleCheckCompleted = (id) => {
        this.setState((prevState) => {
            return {
                todoList: prevState.todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
            };
        });
    }

    handleDelete = (id) => {
        this.setState((prevState) => {
            return {
                todoList: prevState.todoList.filter(todo => todo.id !== id)
            };
        });
    }

    render() {
        return (
            <>
                <h1>My ToDo list</h1>
                {this.state.isDelete && (
                    <div className="alert alert-danger" role="alert">
                        To-do deleted successfully!
                    </div>
                )}
                {this.state.isCreate && (
                    <div className="alert alert-success" role="alert">
                        To-do created successfully!
                    </div>
                )}
                <FormToDo addToDO={this.addToDO} />
                <ul className="list-group list-group-flush">
                    {this.state.todoList.map((todo) => (
                        <ToDo
                            key={todo.id}
                            todo={todo}
                            handleCheckCompleted={this.handleCheckCompleted}
                            handleDelete={this.handleDelete}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default ToDoList;