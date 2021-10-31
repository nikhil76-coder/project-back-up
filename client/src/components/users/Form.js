import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import "./newUser.css";
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: theme.spacing(2),

//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '300px',
//     },
//     '& .MuiButtonBase-root': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// const Signup = ({ handleClose }) => {
const Form = ({ handleClose }) => {

  // const classes = useStyles();
  // create state variables for each input
  const [organization, setOrganization] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  // const [admin, setAdmin] = useState('');
  const [role, setRole] = useState('');
  // const [err , setErr] =useState("")




  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let data = JSON.stringify({
      //   "role": role,
      //   "roledescription": roledescription,
      //   "organization": Organization,
      organization,
      firstname,
      lastname,
      email,
      number,
      address,
      password,
      role
    });

    console.log(data)

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/auth/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    handleClose();

  };

  return (
    //   <div className="newUser">

    //   <form className="newUserForm">
    //   <div className="newUserItem">
    //       <label>First Name</label>
    //       <input type="text"  />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Last Name</label>
    //       <input type="text"  />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Organization</label>
    //       <input type="text"  />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Email</label>
    //       <input type="email" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Password</label>
    //       <input type="password"  />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Phone</label>
    //       <input type="text" />
    //     </div>
    //     <div className="newUserItem">
    //       <label>Address</label>
    //       <input type="text" />
    //     </div>
    //     {/* <div className="newUserItem">
    //       <label>Gender</label>
    //       <div className="newUserGender">
    //         <input type="radio" name="gender" id="male" value="male" />
    //         <label for="male">Male</label>
    //         <input type="radio" name="gender" id="female" value="female" />
    //         <label for="female">Female</label>
    //         <input type="radio" name="gender" id="other" value="other" />
    //         <label for="other">Other</label>
    //       </div>
    //     </div> */}
    //     <div className="newUserItem">
    //       <label>Is Admin</label>
    //       <select className="newUserSelect" name="active" id="active">
    //         <option value="0">No</option>
    //         <option value="1">Yes</option>

    //         </select>
    //       </div>
    //       <button className="newUserButton">Create</button>
    //     </form>
    // </div>
    <div className="newUser">
      <form className="newUserForm" onSubmit={handleSubmit}>
          {/* <form className={classes.root} onSubmit={handleSubmit}> */}
            <div className="newUserItem">
               <label>First Name</label>
                <input type="text" required value={firstname} onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="newUserItem">
               <label>Last Name</label>
               <input type="text" required value={lastname}  onChange={e => setLastName(e.target.value)} />
            </div>
           <div className="newUserItem">
              <label>Organization</label>
              <input type="text" required value={organization} onChange={e => setOrganization(e.target.value)} />
           </div>
        <div className="newUserItem">
           <label>Email</label>
            <input type="email"
              required
              value={email}
               onChange={e => setEmail(e.target.value)} />
         </div>
         <div className="newUserItem">
            <label>Password</label>
            <input type="password"
             required
            value={password}
            onChange={e => setPassword(e.target.value)} />
         </div>
         <div className="newUserItem">
            <label>Phone</label>
            <input type="text" required
            value={number}
            onChange={e => setNumber(e.target.value)} />
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="text" required
            value={address}
            onChange={e => setAddress(e.target.value)} />
        </div>
        <div className="newUserItem">
             <label>Is Admin</label>
             <select className="newUserSelect" name="active" id="active" required
             value={role}
             onChange={e => setRole(e.target.value)}>
             <option value="0">No</option>
             <option value="1">Yes</option>
            </select>
        </div>
        <div className="newUserItem">
           {/* <Button variant="contained" >
            Cancel
            </Button> */}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
        </div>
      </form>
    </div>
  )
};

export default Form;