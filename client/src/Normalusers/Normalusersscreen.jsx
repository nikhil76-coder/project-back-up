import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
// import Userslist from "./components/Userlist"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Documentcenter from "./components/Documentcenter";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import User from "./components/user/User";
import Home from "./pages/home/Home";

const useStyles = makeStyles((theme) => ({
  Documentcenter: {
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Normalusers = () => {
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
            <Route exact path="/user/dashboard">
              <Grid item sm={10} xs={10}>
                <Home />
              </Grid>
            </Route>
            <Route path="/documents">
              <Grid item sm={10} xs={10}>
                {/* <UploadFiles/> */}
                <Documentcenter />
              </Grid>
            </Route>
          </Grid>
        </switch>
      </Router>
    </div>
  );
};

export default Normalusers;
