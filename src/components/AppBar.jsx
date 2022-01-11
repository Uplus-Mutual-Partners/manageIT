import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input, FormControl } from "@mui/material";
import { addUserAction } from "../redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";


export default function ButtonAppBar() {
  const users = useSelector((state) => state.users.userInfo);
  const dispatch = useDispatch();
  let Location = useLocation();
  const [title, setTitle] = useState("");
  const [addButton, updateButton] = useState("");
  let path;
  useEffect(() => {
    path = location.pathname;
    getPath();
  }, [location.pathname]);

  function getPath() {
    if (path == "/Posts") {
      setTitle("List of Posts");
      updateButton("Add Post");
    } else if (path == "/Comments") {
      setTitle("List of Comments");
      updateButton("Add Comment");
    } else {
      setTitle("List of Users");
      updateButton("Add User");
    }
  }

  const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 100,
        marginLeft: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
   
});
  
  const [open, setOpen] = useState(false);

  const [state, setState] = React.useState({
    name: "",
    username: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
  });

  const handleChange = (event) => {
    const { id, value} = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value
    }));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("list==========================",state);
    dispatch(addUserAction(state));
    // const { id, value} = event.target;
    // setState(prevState => ({
    //   ...prevState,
    //   [id]: "",
    // }));
    

    
  };

  const hundleClickOpen = () => {
    setOpen(true);
  };

  const hundleClickClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Toolbar className="app-bar">
        <Typography variant="h3" sx={{ flexGrow: 1, marginLeft: "35px" }}>
          {title}
        </Typography>
        <Button
          variant="contained"
          style={{ borderRadius: "10px" }}
          className="add-btn"
          onClick={hundleClickOpen}
        >
          {addButton}
        </Button>
      </Toolbar>
      <Dialog open={open} onClose={hundleClickClose}>
        <DialogTitle style={{ textAlign: "center", fontWeight: "Bold" }}>
          Add user
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <FormControl className="formButtons">
              <label for="name">Name:</label>

              <TextField
                
                onChange={handleChange}
                authoFocus
                id="name"
              />
            </FormControl >
           
            <FormControl  sx={{ marginLeft: 3}}>
              <label for="username" >Username:</label>

              <TextField
                
                onChange={handleChange}
                authoFocus
                id="username"
              />
            </FormControl>
            <br />

            <FormControl>
              <label for="street">Street:</label>

              <TextField
                
                onChange={handleChange}
                authoFocus
                id="street"
              />
            </FormControl>
            
            <FormControl sx={{ marginLeft: 3}}>
              <label for="suite">Suite:</label>

              <TextField
              
                onChange={handleChange}
                authoFocus
                id="suite"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="city">city:</label>

              <TextField
               
                onChange={handleChange}
                authoFocus
                id="city"
              />
            </FormControl>
           
            <FormControl sx={{ marginLeft: 3}}>
              <label for="zipcode">zipcode</label>

              <TextField
         
                onChange={handleChange}
                authoFocus
                id="zipcode"
              />
            </FormControl>
            <br />
            <FormControl>
              <label for="lat">Lat:</label>

              <TextField
              
                onChange={handleChange}
                authoFocus
                id="lat"
              />
            </FormControl>
            
            <FormControl sx={{ marginLeft: 3}}>
              <label for="lng">Lng:</label>

              <TextField
               
                onChange={handleChange}
                authoFocus
                id="lng"
              />
            </FormControl>

            <DialogActions className="formButtons">
              <Button
                onClick={hundleClickClose}
                color="success"
                variant="contained"
              >
                cancel
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={hundleClickClose}
                type="submit"
              >
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}
