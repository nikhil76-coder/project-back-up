import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@material-ui/core/Button';


import Admins from "./components/admins/Admins";
import Organizations from "./components/organizations/Organizations";
import Users from "./components/users/Users";
import Roles from "./components/roles/Roles";
const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick }) => (
  <Fragment>
    <AppBar  color="A9A9A9" className={classes.aboveDrawer}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="A9A9A9"
          aria-label="Menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <Button color="inherit" onClick={()=>{
                localStorage.clear()
                 // dispatch({type:"CLEAR"})
                  history.push('/signin')
                window.location.reload()
               }}> Logout</Button>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </Fragment>
));

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === "persistent"
          })}
        />
        <List>
          {/* <ListItem
            button
            component={Link}
            to="/"
            onClick={onItemClick("Home")}
          >
            <ListItemText>Home</ListItemText>
          </ListItem> */}
           <ListItem
            button
            component={Link}
            to="/organizations"
            onClick={onItemClick("Organizations")}
          >
            <ListItemText>Organizations</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/admins"
            onClick={onItemClick("Admins")}
          >
            <ListItemText>Admins</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/users"
            onClick={onItemClick("Users")}
          >
            <ListItemText>Users</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/roles"
            onClick={onItemClick("Roles")}
          >
            <ListItemText>Roles</ListItemText>
          </ListItem>
        
        </List>
      </Drawer>
      <main className={classes.content}>
         <Route exact path="/organizations" component={Organizations} />
          <Route exact path="/admins" component={Admins} />

        <Route exact path="/users" component={Users} />
        <Route exact path="/roles" component={Roles} />
      </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);




