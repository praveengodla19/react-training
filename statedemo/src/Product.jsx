import { useState } from "react";


function Product(){

    const [isfound,setIsfound] = useState(false);
    const [numbers, setNumbers] =useState([10,20,30,40,50]);
    const [product, setProduct] = useState({
        id:1001,
        name:"Laptop",
        price:45000
    });

    const changePrice = () =>{
        setProduct({...product, price: product.price+100})
        setIsfound(true);
    };

    const addNumber = ()=>{
        setNumbers([...numbers,60])
    }

    return (
        <div>
            <h2> Product Details</h2>
            <h2> {product.name} - {product.price} </h2>
            <button onClick={changePrice}>Increase Price</button>
            <div>
                <button onClick={addNumber}>Add Numbers</button>
                {numbers.map((n,i)=><p key={i}>{n}</p>)}
            </div>
        </div>
    );

}

export default Product;