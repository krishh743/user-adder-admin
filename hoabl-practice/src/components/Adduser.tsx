import React from "react";
import "./Adduser.css";
import "../App.css";

// import {AppBar, Tabs, Button} from "@";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
function Adduser() {
  return (
    <>
      <div className="container">
        <div className="btn-container" style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
          <div>
            <h4 className="user-content">Create New User</h4>
          </div>
          <div className="btn-sample">
            <Button variant="contained" className="btn__cancel">
              Cancel
            </Button>
            <Button  variant="contained" className="btn__cancel" style={{minWidth:'8rem'}}>
              Save & New
            </Button>
            <Button  variant="contained" className="btn__cancel">
              Save
            </Button>
          </div>
        </div>
        <div
          style={{
            border: "1px solid blue",
            height: "25%",
            margin: "2%",
            padding: "3%",
            width: "90%",
            borderRadius: "8px"
          }}
        >
          <FormLabel id="demo-row-radio-buttons-group-label">
            <h3>Enter Details</h3>
          </FormLabel>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl sx={{maxWidth: 250}} fullWidth>
                <label>Email Address</label>
                <InputLabel id="demo-simple-select-label" className="input-color" >
                 <label>Select</label>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  className="input-color"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} lg={6}>
              <FormControl sx={{maxWidth: 250}} fullWidth>
                <label>Employee-Id</label>
                <TextField
                  id="filled-basic"
                  label="auto-filled"
                  variant="filled"
 className="input-color"
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} lg={6}>
              <FormControl sx={{maxWidth: 250}} fullWidth>
                <label>Password</label>
                <TextField label="password" variant="filled" type="password"  className="input-color"/>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            border: "1px solid blue",
            height: "10%",
            margin: "2%",
            padding: "3%",
            width: "90%",
          borderRadius: "8px"
          }}
        >
          <Grid>
            <Grid item xs={4} lg={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Select Role
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Super Admin"
                    control={<Radio />}
                    label="Super Admin"
                  />
                  <FormControlLabel
                    value="Admin"
                    control={<Radio />}
                    label="Admin"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Adduser;
