import React,{useState,useEffect} from "react"
import Axios from "axios";
import cartItem from "./CartItem";

import { random,commerce,datatype } from "faker";
import {Container,Col,Row} from "reactstrap"
import CartItem from "./CartItem";


const apiKey=process.env.REACT_APP_API_KEY;


const url="https://api.pexels.com/v1/search?query=clothes&per_page=6&page=1"




const BuyPage=({addInCart})=>{
    

    const [product,setProduct]=useState([])
    const FetchPhotos=async()=>{
        const response=await Axios.get(url,{
            header:{
                Authorization:apiKey
            }
        })

        const {photos}=response.data;


        const allProduct=photos.map(photo=>({
            smallimage:photo.src.medium,
            tinyImage:photo.src.tiny,
            productName:random.word(),
            productPrice:commerce.price(),
            id:datatype.uuid() 

        }));
        setProduct(allProduct)
    }
    
        useEffect(() => {
            FetchPhotos();
        }, []);
        return(
            <Container fluid>
                <h1 className="text-success text-center">
                    Buy Page
                </h1>
                <Row>
                    {product.map(product=>(
                        <Col md={4} key={product.id}>
                            <CartItem product={product} 
                            addInCart={addInCart}/>

                        </Col>
                        
                    ))}
                </Row>
            </Container>
        )

        

    
}



export default BuyPage;




