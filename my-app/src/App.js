import Header from './Header/Header';
import Counter from './Counter/Counter';
// import ToDolist from './ToDolist/Todolist'
import Modal from './Modal/Modal';
import { Component, useId } from 'react';
import FormLogin from './FormLogin/FormLogin';
// import toDo from './ToDolist/todo.json'

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  createUser = (data) => {
    const newUser = {
      ...data,
      id:useId(),
    }
    console.log(newUser)
  }
  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Counter />
        {/* <ToDolist/> */}
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin createUser={this.createUser}
            closeModal={this.closeModal}/>
          </Modal>
        )}

      </div>
    );
  }
}

export default App;

