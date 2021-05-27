import React, { useState } from "react";

import Proptypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import { Box } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase'

import axios from "../utils/axiosInstance";
import qs from 'qs'

import logo from '../../assert/img/logo.png'



const Signup = (props) => {
    const styles = useStyles();
    const [u_email,setu_email] = useState('susiewilson@emailaddress.com')
    const [u_name,setu_name] = useState('Susie Wilson')
    const [u_password,setu_password] = useState('1234')
    const [secret,setSecret] = useState('password')

    const submit = () =>{
        let data={u_email, u_password, u_name}
        axios.post("/user/register", qs.stringify(data) ).then((res) => {
            alert('success')
        })
    }
    return(
        <Container className={styles.container} fixed>
            <Box className={styles.content} >
                <Box className={styles.logo}>
                    <img src={logo}></img>
                </Box>
                <Box className={styles.texts}>
                    <Typography variant="body2">
                        You have been invited to a project board by Joe Adsett. To continue, complete your account creation by filling in the below details.
                    </Typography>
                </Box>
                <Box >
                    {/* <Box className={styles.textField} >
                        <TextField
                            id="u_email"
                            value={u_email}
                            onChange={(text)=>{setu_email(text.target.value)}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Email</InputAdornment>,
                            }}
                            fullWidth={true}
                        />
                    </Box>
                    <Box className={styles.textField} >
                        <TextField
                            id="u_name"
                            value={u_name}
                            onChange={(text)=>{setu_name(text.target.value)}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Name</InputAdornment>,
                            }}
                            fullWidth={true}
                        />
                    </Box> */}
                    <Box>
                        <Box className={styles.box_normal} border={1} display="flex">
                            <Typography variant="body2" color="primary">
                                Email
                            </Typography>
                            <InputBase 
                                value={u_email}
                                textAlign="right"
                                onChange={(text)=>{setu_email(text.target.value)}}
                                fullWidth
                                
                            />
                        </Box>
                        <Box className={styles.box_normal}>
                            <Typography variant="body2">
                                Actions
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.passwordField} >
                        <TextField
                            id="u_password"
                            value={u_password}
                            onChange={(text)=>{setu_password(text.target.value)}}
                            type={secret}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Password</InputAdornment>,
                            }}
                        />
                        <IconButton color="primary" onClick={()=>{
                            setSecret((secret=="password")?("text"):("password"))
                        }}>
                            <VisibilityIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box className={styles.signup}>
                    <Button variant="contained" size="large" color="primary" onClick={()=>{
                        submit()
                    }}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
Signup.propTypes = {
}
const useStyles = makeStyles({
    container: {
        borderRadius: 8,
    },
    box_normal:{
        borderRadius: 8,
        // textAlign:"center",
        borderBottomColor:"#0070C3",
        borderBottomWidth:2,
        padding:10,
    },
    content: {
        width:800,
        height:500,
        marginTop:100,
        marginLeft:200,
        textAlign:"center",
        backgroundColor:"#F5F3F2",
    },
    texts:{
        width:500,
        marginLeft:150,
    },
    textField:{
        width:310,
        marginLeft:235,
    },
    signup:{
    },
});
export default Signup;