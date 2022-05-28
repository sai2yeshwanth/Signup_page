import React from "react";
import {Link,Navigate, useNavigate} from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import useState from 'react-hook-use-state';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.css'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));



const Login = () => {

  const classes = useStyles();
  
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')

    // set username
    const onChangeUserName = (e: any) => {
        setUsername(e.target.value)
    }

    // set password
    const onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }


    // onclick submitClearfield
    const onClickSubmitClearfield = async(e:any) => {
      e.preventDefault()
      setUsername('')
      setPassword('')
    }

  // onclick Submit
  const onClickSubmit =async (e:any) => {
    e.preventDefault()
  }

  return (
    <form className={classes.root}>
      <div><h1>Login</h1></div>
 
      <TextField
        type = "text"
        id="demo-helper-text-aligned"
        label="User Name"
        required
        value={username}
        onChange={onChangeUserName}
      />
      <TextField
        type= "password"
        required
        id="demo-helper-text-aligned-no-helper"
        label="Password"
        value={password}
        onChange={onChangePassword}
        />
      <div>
        <Button variant="contained"  onClick={onClickSubmitClearfield}>Clear</Button>
        <Button variant="contained"  onClick={onClickSubmit} >Login</Button> 


      </div>


    </form>
  );
}


export default Login