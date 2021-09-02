import React,{useState,useEffect} from "react"
import {Axios} from "axios";

import { random,commerce } from "faker";
import {Container,Col,Row} from "reactstrap"


const apiKey=process.env.REACT_APP_API_KEY;


const url="https://api.pexels.com/v1/search?query=clothes&per_page=6&page=1"




const BuyPage=({addInCart})=>{

    const [product,setProduct]=useState([])
    const fetchPhotos=async()=>{
        const response=await Axios.get(url,{
            header:{
                Authorization:apiKey
            }
        })
        const { photos } = data;
        useEffect(() => {
            fetchPhotos();
        }, []);
};
    }

}


export default BuyPage




