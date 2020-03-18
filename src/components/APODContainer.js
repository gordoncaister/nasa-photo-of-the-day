import React, {useState,useEffect} from "react";
import ImgDiv from "./ImgDiv"
import Description from "./Description"


const axios = require('axios')


const APODContainer = () => {
    const date = new Date();
    console.log(date);
    const [data, setData] = useState([]);

    useEffect( () => {
        axios   .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
                .then( response => {
                    setData(response.data)
                    return response;
                })
                .catch (error => {
                    return "Something went wrong, "+error;
                })
    }, []);

    return(

    <div>
        {console.log(data.hdurl)}
       <ImgDiv url={data.hdurl} title={data.title}  date={data.date}/>
       <Description exp={data.explanation}/>
    </div>

    );
};

export default APODContainer