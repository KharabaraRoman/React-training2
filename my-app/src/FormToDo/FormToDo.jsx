import React, { Component } from "react";
import nanoid from 'nanoid'

class FormToDo extends Component {
    state = {
        todo: '',
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    addToDO = (value) => {
        this.setState((prev) => {
            return {
                todoList: [...prev.todoList, {
                    "id": nanoid(),
                    "title": value,
                    "Completed": false
                },
                ],
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addToDO(this.state.todo)
        this.setState({
            todo: '',

        });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Create to-do
                    </label>
                    <input
                        name="todo"
                        type="text"
                        className="form-control"
                        id="exampleInput"
                        onChange={this.handleChange}
                        value={this.state.todo}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add to-do
                </button>
            </form>
        );
    }
}

export default FormToDo;