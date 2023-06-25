import Header from './Header/Header';
import Counter from './Counter/Counter';
import React from 'react';
// import ToDolist from './ToDolist/Todolist'
import Modal from './Modal/Modal';
import { useId, useState } from 'react';
import FormLogin from './FormLogin/FormLogin';

import toDo from './ToDolist/todo.json'

const obj = {
  name: "Alex",
  age: 30
}


const showModal = () => {
  setIsShowModal(true)
  
}
const closeModal = () => {
  setIsShowModal(false)
}
function createUser(data)  {
  const newUser = {
    ...data, 
    id: nanoid(),
  }
}

const handleSearch = () => {
  setSearchText(searchText)
}


const App = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [SearchText, setSearchText] = useState('')
  const id = nanoid()
  return (
    <div className='container'>
      <Header showModal={showModal} />
      <Search handleSearch={handleSearch} />
      <Contentinfo searchText={searchText} />
      <ToDoList />
      {this.state.isShowModal && (
        <Modal closeModal={this.closeModal}>
          <FormLogin
            closeModal={this.closeModal}
            createUser={this.createUser}
          />
        </Modal>
      )}
    </div>
  )
};



//   showModal = () => {
//     this.setState({ isShowModal: true });
//   };

//   closeModal = () => {
//     this.setState({ isShowModal: false });
//   };
//   createUser = (data) => {
//     const newUser = {
//       ...data,
//       id:useId(),
//     }
//     console.log(newUser)
//   }
//   render() {
//     return (
//       <div className="container">
//         <Header showModal={this.showModal} />
//         <Counter />
//         {/* <ToDolist/> */}
//         {this.state.isShowModal && (
//           <Modal closeModal={this.closeModal}>
//             <FormLogin createUser={this.createUser}
//             closeModal={this.closeModal}/>
//           </Modal>
//         )}

//       </div>
//     );
//   }
// }

export default App;

