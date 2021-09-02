import React,{useState,useEffect} from "react"
import {Axios} from "axios";

import { random,commerce } from "faker";
import {Container,Col,Row} from "reactstrap"


const apiKey=""

const url="https://api.pexels.com/v1/search?query=clothes&per_page=6&page=1"

const fetchPhotos=async=()=>{
    const response=await Axios.get(url,{
        header:{
            Authorization:apiKey
        }
    })
}


const BuyPage=({addInCart})=>{

    const [product,setProduct]=useState([])

}


export default BuyPage




