import React from "react";
import useState from "react-hook-use-state";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core";




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
  



const Signup = () => {

    const classes = useStyles();

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('') 
    const [mail, setMail] = useState('')
    const [mobilenumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')


    // set firstname
    const onChangeFirstName = (e: any) => {
        setFirstName(e.target.value)
    }

    // set lastname
    const onChangeLastName = (e: any) => {
        setLastName(e.target.value)
    }

    // set username
    const onChangeUserName = (e: any) => {
        setUsername(e.target.value)
    }

    // set mail
    const onChangeMail = (e: any) => {
        setMail(e.target.value)
    }

    // set mobilenumber
    const onChangeMobileNumber = (e: any) => {
        setMobileNumber(e.target.value)
    }

    // set password
    const onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }
    // onclick submitClearfield
    const onClickSubmitClearfield = async(e:any) => {
        e.preventDefault()
        setFirstName('')
        setLastName('')
        setMail('')
        setMobileNumber('')
        setUsername('')
        setPassword('')
    }


    // onclick Submit

    const onClickSubmit = async(e:any) => {
        e.preventDefault()
    }


    return (
        <form className={classes.root}>
        <div><h1>SignUp</h1></div>

        <TextField
          type="text"
          id="demo-helper-text-aligned"
          label="First Name"
          value={firstname}
          onChange={onChangeFirstName}
        />

        <TextField
          type="text"
          id="demo-helper-text-aligned"
          label="Last Name"
          value={lastname}
          onChange={onChangeLastName}
        />

        <TextField
          type="text"
          id="demo-helper-text-aligned"
          label="User Name"
          value={username}
          onChange={onChangeUserName}
        />
   
        <TextField
          type="email"
          id="demo-helper-text-aligned"
          label="Mail Id"
          value={mail}
          onChange={onChangeMail}
        />
        <TextField
          type="text"
          id="demo-helper-text-aligned"
          label="Mobile Number"
          value={mobilenumber}
          onChange={onChangeMobileNumber}
        />
        
        <TextField
          type= "password"
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Password"
          value={password}
          onChange={onChangePassword}
          />
        <div>
          <Button variant="contained"  onClick={onClickSubmitClearfield}>Clear</Button>
          <Button variant="contained"  onClick={onClickSubmit} >Signup</Button>
        </div>
  
  
      </form>
    
      );
}


export default Signup