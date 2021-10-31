import React from 'react'
import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import UploadFiles from "./components/UploadFiles";
import Documents from "./components/css/Documnetviewer";
import Home from "./pages/home/Home";
import User from "./components/user/User";
import Userslist from "./components/Userlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Documentcenter: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Financialadmin = () => {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Navbar />
        <switch>
          <Grid container>
            <Grid item sm={2} xs={2}>
              <Leftbar />
            </Grid>
            <Route exact path="/admin/dashboard">
              <Grid item sm={10} xs={10}>
                <Home />
              </Grid>
            </Route>
            <Route path="/documents">
              <Grid item sm={10} xs={10}>
                <Documents />
              </Grid>
            </Route>
            <Route path="/edituser">
              {/* <Grid item sm={10} xs={10}>
               <User />
              </Grid> */}
            </Route>
            <Route path="/userslist">
              <Grid item sm={10} xs={10}>
                <Userslist />
              </Grid>
            </Route>

            {/* <Grid item sm={3} className={classes.Documentcenter}>
           <Documentcenter/>
            </Grid> */}
            {/* <Add /> */}
          </Grid>
        </switch>
      </Router>
    </div>
  );
};

export default Financialadmin;
