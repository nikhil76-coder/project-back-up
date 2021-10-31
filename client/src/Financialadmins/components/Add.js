import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
  Grid,
} from "@material-ui/core";
import React, { useState } from 'react';
import { Add as AddIcon } from "@material-ui/icons";

import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 550,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const [organization, setOrganization] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const [role, setRole] = useState('');


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);

  };
  





  const handleSubmit = e => {
    e.preventDefault();
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let data = JSON.stringify({
    
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
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form}  onSubmit={handleSubmit} autoComplete="off" >
            <div className={classes.item}>
              <TextField id="standard-basic" label="First Name" size="small" required value={firstname} onChange={e => setFirstName(e.target.value)} />

              <TextField id="standard-basic" label="Last Name" size="small" required value={lastname} onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Organization"
                size="small"
                required value={organization} onChange={e => setOrganization (e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField id="standard-basic" label="Email" size="small"    required
              value={email}
               onChange={e => setEmail(e.target.value)}/>

              <TextField id="standard-basic" label="Password" size="small"
                required
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>
            
         
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Number"
                size="small"
                required
            value={number}
            onChange={e => setNumber(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>

            <div className={classes.item}>
              <TextField select label="Is Admin"  value={role}
               onChange={e => setRole(e.target.value)}>
                <MenuItem value="0">No</MenuItem>
                <MenuItem value="1">yes</MenuItem>
              </TextField>
            </div>

            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                type="submit" 
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          User added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
