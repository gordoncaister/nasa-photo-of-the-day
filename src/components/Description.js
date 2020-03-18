import React, {useState,useEffect} from "react";

const Description = (props) => {
    return(
        <section>
            <h3>Description:</h3>
            <p>{props.exp}</p>
        </section>
    )
}

export default Description;