import React, { useState,useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ForumIcon from '@material-ui/icons/Forum';

import Proptypes from 'prop-types'

import axios from "../utils/axiosInstance"
import ProgressBar from "./ProgressBar"

import background from '../../assert/img/background.png'
import avatar1 from '../../assert/img/avatar1.png'
import avatar2 from '../../assert/img/avatar2.png'

const Lifecycle = (props) => {
    const classes = useStyles();
    const [updates,setUpdates] = useState([
        {
            "up_id": 1,
            "up_title": "Meeting",
            "up_content": "Hi @Cameron, do you think we could have a meeting sometime next week? Let me know what times you are free and I can book it in the best option for me.",
            "u_id": 1,
            "up_time": "Today 12:05pm",
            "u_email": "susiewilson@emailaddress.com",
            "u_password": "1234",
            "u_name": "Susie Wilson",
            "u_image": avatar1,
            "u_address": "Lot432"
        },
        {
            "up_id": 2,
            "up_title": "Start of Pre-Development",
            "up_content": "Hi Again @Susie, now that the plan has been signed off on, the pre-development stage begins! Let me know if you haveany questions, otherwise we can get started on the details.",
            "u_id": 2,
            "up_time": "Sat 1:15pm",
            "u_email": "cameronjones@gmail.com",
            "u_password": "1234",
            "u_name": "Cameron Jones",
            "u_image": avatar2,
            "u_address": "Lot433"
        }
    ])
    useEffect(()=>{
        axios.get("/home/updates").then((resp)=> {
            console.log(resp.data)
            setUpdates(resp.data)
        })
    },[])
    return(
        <div>
            <div>
                <ProgressBar/>
            </div>
            <Box className={classes.background}>
                <Box>
                    <img src={background}></img>
                </Box>
                <Box className={classes.records_field}>
                    <Box display='flex' flexDirection='row'>
                        <Box className={classes.box_left} borderBottom={1} flexGrow={1}>
                            <Typography variant="body2" color="primary">
                                Updates
                            </Typography>
                        </Box>
                        <Box className={classes.box_right}>
                            <Typography variant="body2">
                                Actions
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.textField}>
                        <TextField  className={classes.textfield} placeholder={"Post an Update..."} variant="outlined" fullWidth={true}/>
                    </Box>
                    <Box bgcolor='#F5F3F2'>
                        {
                            updates.map((update, index) => (
                            <Record update={update} key = {index}/>
                            ))
                            // console.log(props.searchResult)
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
Lifecycle.propTypes = {
}
const Record = (props) => {
    const classes = useStyles();
    return(
        <Box className={classes.box}>
            <Box className={classes.box_record}>
                <Box>
                    <Avatar src={props.update.u_image} />
                </Box>
                <Box flexGrow={1} className={classes.box_name}> 
                    <Typography variant="body2" color="primary">
                        {props.update.u_name}
                    </Typography>
                </Box>
                <Box className={classes.record_time}>
                    <Typography variant="body2">
                        {props.update.up_time}
                    </Typography>
                </Box>
            </Box>
            <div>
                <Typography variant="h6">
                    {props.update.up_title}
                </Typography>
            </div>
            <div>
                <Typography variant="body2">
                    {props.update.up_content}
                </Typography>
            </div>
            <Box className={classes.record_buttom} bgcolor='#F5F3F2'>
                <Box className={classes.box_buttom}>
                    <IconButton color="default" >
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Button className={classes.box_buttom_box}>Like</Button>
                </Box>
                <Box className={classes.box_buttom}>
                    <IconButton color="default" >
                        <ForumIcon />
                    </IconButton>
                    <Button className={classes.box_buttom_box}>Comment</Button>
                </Box>
            </Box>
        </Box>
    )
}
Record.propTypes = {
    update:Proptypes.object.isRequired,
}
const useStyles = makeStyles((theme) => ({
    container:{
      display:'flex',
      backgroundColor:'#D8D1CB',
      padding:5,
    },
  
    background: {
      alignItems: 'center',
      width:1100,
      backgroundColor:'#F5F3F2',
      borderRadius: 8,
      borderWidth:0,
      margin:10,
    },
    records_field:{
        width:600,
        marginTop:-20,
        marginLeft:200,
        height:600,
    },
    textField:{
        marginTop:10,
        marginBottom:10,
    },
    box_left:{
        borderRadius: 8,
        textAlign:"center",
        borderBottomColor:"#0070C3",
        borderBottomWidth:2,
        padding:10,
        backgroundColor:'#FFFFFF',
    },
    box_right:{
        borderRadius: 8,
        width:150,
        textAlign:"center",
        padding:10,
        backgroundColor:'#FFFFFF',
        marginLeft:30,
    },
    middle_tab:{
        display:'flex',
    },
    divider:{
        backgroundColor:"#0070c3",
    },
    textfield:{
        borderRadius: 8,
    },
    box:{
        borderRadius: 8,
        backgroundColor:'#FFFFFF',
        marginTop:10,
    },
    box_record:{
        display:"flex",
    },
    box_name:{
        padding:10,
        
    },
    box_buttom:{
        borderRadius: 8,
        display:"flex",
        margin:5,
        backgroundColor:'#F5F3F2',
        width:100,
    },
    box_buttom_box:{
        textTransform: "none",

    },
    record_buttom:{
        display:"flex",
    },
    record_time:{
        // float:'right',
        marginRight:10,
    }
  }));

export default Lifecycle;