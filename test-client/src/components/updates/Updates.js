import React, { useState } from "react";
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Proptypes from 'prop-types'

import PersonalInfo from "./PersonalInfo"
import Lifecycle from "./Lifecycle"
import Events from "./Events"

const Updates = (props) => {
    const classes = useStyles();
    const [u_id,setu_id]=useState(1)

    return(
        <Container className={classes.container}>
            <PersonalInfo u_id={u_id}/>
            <Lifecycle />
            <Events u_id={u_id}/>
        </Container>
    )
}
Updates.propTypes = {
}
const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
      backgroundColor:'#D8D1CB',
    },
  }));

export default Updates;