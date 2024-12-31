import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from './slices/userSlice';
import { useNavigate } from 'react-router-dom';

function Start() {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [forminput, setForminput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });



  const handlechange = (event) => {
    
    const { name, value } = event.target;
    setForminput({
      ...forminput,
      [name]: value,
    });
  };



  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent default form submission
  //   console.log("Form submitted:", forminput);
  // };

  const adduser=(event)=>{
    event.preventDefault();
    dispatch(setUsers(forminput))
    console.log(forminput)
    navigate("/user");
  }

  const routRoughPage= ()=> {
    navigate("/rough");
  }

  const routfigma= ()=> {
    navigate("/figma");
  }




  return (
    
    <div
      style={{
        backgroundColor: "#000", // Black background
        color: "#0f0", // Green text
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Courier New, monospace", // Terminal-like font
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "#111", // Slightly lighter black for the form
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
          boxShadow: "0 4px 8px rgba(0, 255, 0, 0.5)", // Green glow
          color: "#0f0",
        }}
      >

        <h2> Page built with <b>Redux</b>.</h2>
        <form >
          <label>Name</label> <br />
          <input
            type="text"
            name="name"
            value={forminput.name}
            onChange={handlechange}
            style={{
              backgroundColor: "#000",
              color: "#0f0",
              border: "1px solid #0f0",
              padding: "5px",
              marginBottom: "10px",
              width: "100%",
            }}
          />
          <br />

          <label>Age</label> <br />
          <input
            type="text"
            name="age"
            value={forminput.age}
            onChange={handlechange}
            style={{
              backgroundColor: "#000",
              color: "#0f0",
              border: "1px solid #0f0",
              padding: "5px",
              marginBottom: "10px",
              width: "100%",
            }}
          />
          <br />

          <label>Email</label> <br />
          <input
            type="text"
            name="email"
            value={forminput.email}
            onChange={handlechange}
            style={{
              backgroundColor: "#000",
              color: "#0f0",
              border: "1px solid #0f0",
              padding: "5px",
              marginBottom: "10px",
              width: "100%",
            }}
          />
          <br />

          <label>Contact</label> <br />
          <input
            type="text"
            name="contact"
            value={forminput.contact}
            onChange={handlechange}
            style={{
              backgroundColor: "#000",
              color: "#0f0",
              border: "1px solid #0f0",
              padding: "5px",
              marginBottom: "10px",
              width: "100%",
            }}
          />
          <br />

          <button
             
            style={{
              backgroundColor: "#000",
              color: "#0f0",
              border: "1px solid #0f0",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={adduser}
           
          >
            Add
          </button>
        </form>
        <p style={{ color: "#0f0", marginTop: "20px" }}>
        Now, when you submit the form, the user data will be stored in Redux, and upon navigating to the /user page, it will be displayed.
        </p>
        <div
  style={{
    position: "absolute",
    bottom: "10px", // Distance from the bottom of the form container
    left: "50%",
    transform: "translateX(-50%)",
  }}
>
  <button
    style={{
      backgroundColor: "#000",
      color: "#0f0",
      border: "1px solid #0f0",
      padding: "10px",
      cursor: "pointer",
      marginRight: "10px", // Adds space between the buttons
    }}
    onClick={routRoughPage}
  >
    Roughpage
  </button>

  <button
    style={{
      backgroundColor: "#000",
      color: "#0f0",
      border: "1px solid #0f0",
      padding: "10px",
      cursor: "pointer",
    }}
    onClick={routfigma}
  >
    Figma Test
  </button>
</div>

      </div>

    
      
    </div>
    
  );
}

export default Start;