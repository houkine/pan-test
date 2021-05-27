import React, { useState,useEffect } from "react";

import Proptypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {useHistory} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

import axios from "../utils/axiosInstance"
import InputBox1 from "./InputBox1"

import logo2 from '../../assert/img/logo2.png'
import avatar1 from '../../assert/img/avatar1.png'
import avatar2 from '../../assert/img/avatar2.png'
import notice from '../../assert/img/notice.png'
import { Box } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#9E9D9C',
      },
    },
});

const PersonalInfo = (props) => {
    const classes = useStyles();
    const [u_image,setu_image]=useState('')
    const [u_name,setu_name]=useState('Susie Wilson')
    const [u_address,setu_address]=useState('Lot 432')
    const history=useHistory()
    useEffect(()=>{
        axios.get("/home/personalInfo", {params:{'u_id':props.u_id}}).then((resp)=> {
            alert(resp.data)
            setu_name(resp.data.u_name)
            setu_address(resp.data.u_address)
        })
    },[])
    return(
        <Box className={classes.container}>
            <Box className={classes.logo}>
                <img src={logo2}></img>
            </Box>
            <Box className={classes.content} display="flex" flexDirection="column">
                <Box display="flex" justifyContent="flex-end">
                    <Box className={classes.avatar_area} >
                        <Avatar src={avatar1} className={classes.avatar}/>
                    </Box>
                    <Box p={1}>
                        <img src={notice}></img>
                    </Box>
                </Box>
                <Box className={classes.text}>
                    <Typography variant="subtitle1">
                        {u_name}
                    </Typography>
                </Box>
                <Box className={classes.text}>
                    <Typography variant="body2">
                        Client
                    </Typography>
                </Box>
                <Box className={classes.inputBox} flexGrow={1}>
                    <InputBox1 value={u_address} disabled backgroundColor={"#FFFFFF"}/>
                </Box>
                <Box >
                    <MuiThemeProvider theme={theme}>
                        <Box>
                            <Button color="primary" onClick={()=>{
                                history.push('/settings')
                            }}>
                                Settings
                            </Button>
                        </Box>
                        <Box>
                            <Button color="primary">Log Out</Button>
                        </Box>
                    </MuiThemeProvider>
                </Box>
            </Box>
            
        </Box>
    )
}
PersonalInfo.propTypes = {
    u_id:Proptypes.string.isRequired
}
const useStyles = makeStyles((theme) => ({
    container:{
        width:400,
        marginLeft:10,
        marginRight:10,
        marginTop:17,
    },
    logo:{
        marginBottom:20,
    },
    content:{
        backgroundColor:'#F5F3F2',
        height:725,
    },
    avatar:{
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginright:50,
    },
    avatar_area:{
    },
    text:{
        textAlign:"center",
    },
    inputBox:{
        textAlign:"center",
        marginTop:10,
    },
    buttoms:{
        margin:10,
        marginLeft:20,
    }
}));

export default PersonalInfo;