import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="app-bar">
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
          <Button variant="contained" color="primary" className="add-btn">
            Add User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
