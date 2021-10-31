
import React from 'react';
import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Feedback, Home, Mail,People
} from "@material-ui/icons";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    //   <Link to="/products" className="link">
    //   <li className="sidebarListItem">
    //     <Storefront className="sidebarIcon" />
    //     Products
    //   </li>
    // </Link>
    <Container className={classes.container}>
      <Link to="/" >
        <div className={classes.item}>
           <Home className={classes.icon} />
          <Typography className={classes.text}>Home</Typography>
         </div>
      </Link>
      {/* <Link to="/documents" >
        <div className={classes.item}>
          <NoteAddIcon className={classes.icon} />
          <Typography className={classes.text}>Document center</Typography>
        </div>
      </Link > */}
      {/* <Link to ="/edituser" >
      <div className={classes.item}>
        <Mail className={classes.icon} />
        <Typography className={classes.text}>Edit users</Typography>
      </div>
      </Link > */}
      <Link to ="/Userslist" >
      <div className={classes.item}>
        <People className={classes.icon} />
        <Typography className={classes.text}>Users</Typography>
      </div>
      </Link >
      <Link to ="/documents" >
      <div className={classes.item}>
        <Mail className={classes.icon} />
        <Typography className={classes.text}>Documents</Typography>
      </div>
      </Link >
      <div className={classes.item}>
        <Feedback className={classes.icon} />
        <Typography className={classes.text}>Feedback</Typography>
      </div>
   
  
    </Container>
  );
};

export default Leftbar;
