import React, {useState,useEffect} from "react";

const ImgDiv = (props) => {
    return(
        <div className="img-div">
            <img src={props.url} alt=""/>
            <div className="img-info">
                <h3>{props.title}</h3>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default ImgDiv;