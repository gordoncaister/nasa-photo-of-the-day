import React, {useState,useEffect} from "react";
import {Container }from "reactstrap";

const ImgDiv = (props) => {
    return(
        <Container fluid="true" className="img-div" style={{margin:"1rem 1rem",borderRadius:"6px",overflow:"hidden",position:"relative"}}>
            <img src={props.url} alt="" style={{maxHeight: "100vh",maxWidth:"100%"}}/>
            <div className="img-info" style={{position:"absolute",bottom:0,textAlign:"center",margin:"0 auto",width:"100%"}}>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
            </div>
        </Container>
    )
}

export default ImgDiv;