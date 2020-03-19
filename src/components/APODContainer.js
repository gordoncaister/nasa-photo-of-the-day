import React, {useState,useEffect} from "react";
import ImgDiv from "./ImgDiv"
import Description from "./Description"
import {Container} from "reactstrap";


const axios = require('axios')
var moment = require('moment');


const APODContainer = () => {
    const [date,setDate] = useState(moment().format("YYYY-MM-D"))
    console.log(date);
    const [data, setData] = useState([]);

    useEffect( () => {
        axios   .get(`https://api.nasa.gov/planetary/apod?api_key=1ghqCsgv178u8x8fqt2XuDul5aKvIOJ4aZMttAYU&date=${date}`)
                .then( response => {
                    setData(response.data)
                    return response;
                })
                .catch (error => {
                    return "Something went wrong, "+error;
                })
    }, []);

    function remDay(date){
        setDate(moment(date).subtract(1,'days'));
    }
    function addDay(date) {

    }

    return(
    
    <Container fluid="true">
        <ImgDiv url={data.hdurl} title={data.title}  date={date}/>
        <Container fluid="lg">
            <button className="prev-btn" onClick={remDay}>Previous Days'</button>
            <button className="next-btn" onClick={addDay}> Next Days'</button>
            <Description exp={data.explanation}/>
        </Container>
        
    </Container>

    );
};

export default APODContainer