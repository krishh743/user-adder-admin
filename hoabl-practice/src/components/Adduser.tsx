import * as React from "react";
import "./Adduser.css";
// import {AiOutlineUserAdd} from "react-icons/ai";
// import {TextField, Button, Box,Select} from "@material-ui/core";
// import {SearchOutlined} from "@material-ui/icons";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';

function Adduser() {
  return (
    <div className="container">
      <div className="all-btn">
        <h4 className="new-user">Create New User</h4>
<div className="btn-container">
 <h4>Create New User</h4>
        <button className="btn">Cancel</button>
        <button className="btn">Save & new</button>
        <button className="btn">save</button>
</div>
      </div>
    </div>
  );
}

export default Adduser;
