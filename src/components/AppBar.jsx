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
import axios from "axios";

export default function ButtonAppBar() {
  const users = useSelector((state) => state.user.userInfo);
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

  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");

  const handleSubmit = () => {
    dispatch(addUserAction(data));
  };
  console.log(
    "@@@@@@@@@@@@@@@@@@@@@@@@users after submit@@@@@@@@@@@@@@@@",
    users
  );
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  console.log(data);
  const hundleClickOpen = () => {
    setOpen(true);
  };

  const hundleClickClose = () => {
    setOpen(false);
    setData({});
  };

  return (
    <Box>
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
        <Dialog
          onSubmit={(e) => submit(e)}
          open={open}
          onClose={hundleClickClose}
        >
          <DialogTitle style={{ textAlign: "center", fontWeight: "Bold" }}>
            Add user
          </DialogTitle>
          <DialogContent>
            <FormControl>
              <label htmlFor="username">Name : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.name}
                authoFocus
                id="name"
              />
              <br />
              <label htmlFor="username">Username : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.username}
                authoFocus
                id="username"
              />
              <br />
              <label htmlFor="street">Street : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.street}
                id="street"
              />
              <br />

              <label htmlFor="suite">Suite : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.suite}
                id="suite"
              />
              <br />

              <label htmlFor="city">City : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.city}
                id="city"
              />
              <br />

              <label htmlFor="zipcode">Zipcode : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.zipcode}
                id="zipcode"
              />
              <br />

              <label htmlFor="lat">lat : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.lat}
                id="lat"
              />
              <br />

              <label htmlFor="lng">lng : </label>
              <TextField
                onChange={(e) => handle(e)}
                value={data.lng}
                id="lng"
              />
            </FormControl>
            <br />
          </DialogContent>
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
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    </Box>
  );
}
