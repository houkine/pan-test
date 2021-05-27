import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {useHistory} from "react-router-dom"

import Proptypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Box } from "@material-ui/core";


const Settings = (props) => {
    const styles = useStyles();
    const history=useHistory()
    return(
        <Container className={styles.container}>
            <Box className={styles.captial}>
                <Typography variant="h6" color="primary">
                    Settings
                </Typography>
            </Box>
            <Box className={styles.texts}> 
                <Typography variant="caption">
                    Edit your account settings and save when you are finished
                </Typography>
            </Box>
            
            <Box display="flex" flexDirection="column">
                <Box className={styles.button}>
                    <Button color="primary">Profile</Button>
                </Box>
                <Box className={styles.button}>
                    <Button color="primary">Change Password</Button>
                </Box>
                <Box className={styles.button}>
                    <Button color="primary">Notifications</Button>
                </Box>
            </Box>

            <Box display="flex" alignItems="center" className={styles.buttom}>
                <Button variant="contained" className={styles.box_button} onClick={()=>{history.push('/updates')}}>Cancel</Button>
                <Button variant="contained" className={styles.box_button} color="primary">
                    Save
                </Button>
            </Box>
            
        </Container>
    )
}
Settings.propTypes = {
}
const useStyles = makeStyles({
    container: {
        width:800,
        height:500,
        marginTop:100,
        marginLeft:200,
        textAlign:"center",
    },
    captial:{
        marginLeft:30,
        marginBottom:30,
    },
    texts:{
        margintop:10,
        marginBottom:10,
        marginLeft:20,
    },
    textField:{
        width:310,
        marginLeft:235,
    },
    button:{
        backgroundColor:'#FFFFFF',
        borderRadius: 8,
        width:400,
        marginLeft:200,
        marginTop:10,
    },
    buttom:{
        width:400,
        marginLeft:200,
        marginTop:10,
    },
    box_button:{
        margin:30,
        width:200,
    },
});
export default Settings;