import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

export default function ButtonAppBar() {
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
          >
            {addButton}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
