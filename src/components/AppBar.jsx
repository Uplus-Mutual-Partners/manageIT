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
      updateButton("addPost");
    } else if (path == "/Comments") {
      setTitle("List of Comments");
      updateButton("addComment");
    } else {
      setTitle("List of Users");
      updateButton("addUser");
    }
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="app-bar">
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button variant="contained" color="primary" className="add-btn">
            {addButton}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
