// import { Component } from 'react'
// import ToDo from '../ToDo/ToDo'
// import todo from './todo.json'
// import React from 'react'

// class ToDolist extends Component {
//     state = {
//         TodoList: todo,
//     }

//     handleCheckCompleted = (id) => {
//         this.setState((prevState) => {
//             return {
//                 todoList: prevState.todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed }: todo)
//             }
//         })
//     }
//     handleDelete = (id) => {
//         this.setState((prev) => {
//             return {
//                 todoList: prev.todoList.filter(todo => todo.id !== id)
//             }
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h1>My ToDo list </h1>
//                 <ul className="list-group list-group-flush">
//                     {this.state.todoList.map((todo) => {
//                         <ToDo key={todo.id} todo={todo}
//                             handleCheckCompleted={this.handleCheckCompleted}
//                             handleDelete={this.handleDelete}/>
//                     })}
//                 </ul>
//             </>
//         )
//     }
// }
// export default ToDolist