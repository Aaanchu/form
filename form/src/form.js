import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import './form.css';

const Form = () => {
 
     const[modalIsOpen,setModalIsOpen]=useState(false);
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [roll_no, setRoll_No] = useState('');
     const [mobile_no, setMobile_No] = useState('');
     const [password,setPassword]= useState('');
     const [error, setError] = useState(false);
     const [submitted, setSubmitted] = useState(false);
     const [submitClicked, setSubmitClicked] = useState(false);
     function openModal(){
      setModalIsOpen(true);
     };
     const closeModal=()=>{
      setModalIsOpen(false);
     };
     const handleFormSubmit=(e)=>{
      e.preventDefault();
      if (username === ""|| email === ""  || mobile_no === "" || roll_no === "" || password === "") {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
    }
      console.log( { username, email });
      setUsername('');
      setEmail('');
      setMobile_No('');
      setRoll_No('');
      setPassword('');
     };

 const successMessage = () => {
      return (
          <div
              className="success"
              style={{
                  display: submitted ? "" : "none",
              }}
          >
              <h1 className='msg'>User {username} successfully registered!!</h1>
          </div>
      );
      
  };

  const errorMessage = () => {
      return (
          <div
              className="error"
              style={{
                  display: error ? "" : "none",
              }}
          >
              <h1 className='msg'>Please enter all the fields</h1>
          </div>
      );
  };
  
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError(false);
        setSubmitClicked(false); // Reset submitClicked after error message closes
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  useEffect(() => {
    if (submitted) {
      const timeoutId = setTimeout(() => {
        setSubmitted(false);
        setSubmitClicked(false); 
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [submitted]);

return (
    <div>
      <button className='btn' onClick={openModal}>Student Registration Form</button>
       
       <Modal isOpen={modalIsOpen} 
    onRequestClose={closeModal} 
    contentLabel="Student Registration Modal"   
    ariaHideApp={false}
    className="modal" 
     overlayClassName="modal-overlay"
    shouldCloseOnOverlayClick={false} 
    
    >
    <form  className='form' onSubmit={handleFormSubmit}>
      <label>
        Username:<br/>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:<br/>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Roll_No:<br/>
        <input type="number" value={roll_no} onChange={(e)=>setRoll_No(e.target.value)}/>
      </label><br/>
      <label>
        Mobile_No:<br/>
        <input type="tel" value={mobile_no} onChange={(e)=>setMobile_No(e.target.value)}/>
      </label><br/>
      <label>
        Password:<br/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </label><br/>
      {errorMessage()}
      <button className="btn" type="submit" disabled={submitClicked} >{submitClicked ? 'Submitting...' : 'Submit'}</button>
      <button className='btn' onClick={closeModal}>Close</button>
      {successMessage()}
    </form>
   
    </Modal> 
    
    </div>
  );
};      
export default Form; 