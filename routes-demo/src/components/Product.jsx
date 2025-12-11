import { useParams } from "react-router-dom";


export default function Product(){
    const {id,name} = useParams();
    
    return(
        <>
        <h2> The product id received is : {id}</h2>
        <h2> The product id received is : {name}</h2>
        </>
    );
}