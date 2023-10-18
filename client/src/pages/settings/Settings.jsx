import React, { useContext, useState } from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Settings() {
const navigate=useNavigate()
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const{user,dispatch}= useContext(Context)
  const PF="http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username,email,password

    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
        
      } catch (err) {}
    }


    try {
      
      const res = await axios.put(`/users/${user._id}`, updatedUser);

      setSuccess(true);
      dispatch({type:"UPDATE_SUCCESS",payload:res.data})
      // Redirect to the home page
      navigate('/');
    


    } catch (err) {
      dispatch({type:"UPDATE_FAILURE"})
    }
  };



  //=========================================
  // const handleDeleteAccount = async () => {
  //   if (window.confirm("Are you sure you want to delete your account?")) {
  //     try {
  //       await axios.delete(`/users/${user._id}`);
  //       dispatch({ type: "LOGOUT" });
  //       // Redirect the user to the login page or any other appropriate action after deletion.
  //     } catch (err) {
  //       alert(err)
  //     }
  //   }
  // };
  //=======================================




const handleDeleteAccount = async () => {
  if (window.confirm("Are you sure you want to delete your account?")) {
    try {
      const response = await axios.delete(`/users/${user._id}`);

      // Check the response status and handle accordingly
      if (response!==null) {
        // Successful deletion, perform a logout action
        dispatch({ type: "LOGOUT" });
        // Redirect the user to the login page or any other appropriate action after deletion.
      } else {
        // Handle other status codes if needed
        console.error("Unexpected response status: ", response.status);
      }
    } catch (error) {
      // Axios error handling
      if (error.response) {
        // The request was made, but the server responded with an error status code
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received. Is the server running?");
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Request setup error:", error.message);
      }
    }
  }
};



  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <button className="settingsTitleDelete" onClick={handleDeleteAccount}>
          Delete Account
        </button>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="name" 
          onChange={(e) => setUsername(e.target.value)}/>
          
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email" 
           onChange={(e) => setEmail(e.target.value)}/>
          
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" 
           onChange={(e) => setPassword(e.target.value)}/>
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && <span style={{color:'green',textAlign:"center",margin:"20px"}}>Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
