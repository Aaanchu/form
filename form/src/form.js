import React, { useState } from 'react';
import Modal from 'react-modal';

const Form = () => {
 
     const[modalIsOpen,setModalIsOpen]=useState(false);
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const openModal=()=>{
      setModalIsOpen(true);
     };
     const closeModal=()=>{
      setModalIsOpen(false);
     };
     const handleFormSubmit=(e)=>{
      e.preventDefault();
      console.log( { username, email });
      setUsername('');
      setEmail('');
      closeModal();
     };
  
return (
    <div>
      <button onClick={openModal}>Student Registration Form</button>
    <Modal isOpen={modalIsOpen} 
    onRequestClose={closeModal} 
    contentLabel="Student Registration Modal"   
    ariaHideApp={false}
    >
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </Modal>
    </div>
  );
};

export default Form;
