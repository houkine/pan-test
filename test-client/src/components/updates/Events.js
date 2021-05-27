import React, { useState,useEffect } from "react";
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles'

import Proptypes from 'prop-types'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


import axios from "../utils/axiosInstance"

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#9E9D9C',
      },
    },
});

const Events = (props) => {
    const classes = useStyles();
    const [events,setEvents] = useState([
        {
            "e_id": 1,
            "u_id": 1,
            "e_title": "Electrical Meeting",
            "e_time": "2:00pm Mon 05/04/21"
        },
        {
            "e_id": 2,
            "u_id": 1,
            "e_title": "Contract Meeting",
            "e_time": "10:00am Thu 08/04/21"
        },
        {
            "e_id": 3,
            "u_id": 1,
            "e_title": "Construction Starts",
            "e_time": "6:00am Wed 21/04/21"
        }
    ])
    useEffect(()=>{
        axios.get("/home/events").then((resp)=> {
            console.log(resp.data)
            setEvents(resp.data)
        })
    },[])
    return(
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Box>
                    <Calendar className={classes.calendar}></Calendar>
                </Box>
                <Divider />
                <Box>
                    <Typography variant="subtitle1">
                        Upcoming Events
                    </Typography>
                </Box>
                <Box>
                {
                    events.map((event, index) => (
                        <Event event={event} key = {index} className={classes.event}/>
                    ))
                }
                </Box>
            </Box>
        </Box>
    )
}
Events.propTypes = {
    u_id:Proptypes.string.isRequired
}
const Event = (props) =>{
    const classes = useStyles();
    return (
        <Box className={classes.event_container} bgcolor="#F0EEED">
            <Box>
                <Typography variant="subtitle1">
                    {props.event.e_title}
                </Typography>
            </Box>
            <Box>
                <MuiThemeProvider theme={theme}>
                    <Typography variant="body2" color="primary">
                        {props.event.e_time}
                    </Typography>
                </MuiThemeProvider>
            </Box>
        </Box>
    )
}

Event.propTypes = {
    event:Proptypes.object.isRequired,
}
const useStyles = makeStyles((theme) => ({
    container:{
      backgroundColor:'#D8D1CB',
    },
    content:{
        backgroundColor:'#FFFFFF',
        marginTop:100,
        width:230,
        marginLeft:10,
        marginRight:10,
        borderRadius: 10,
    },
    calendar:{
        marginBottom:10,
        borderRadius: 10,
    },
    event:{
        margin: 10,
    },
    event_container:{
        margin: 10,
        padding:10,
        borderRadius: 10,
        backgroundColor:'#F5F3F2',
    },
}));

export default Events;