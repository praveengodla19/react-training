import HelloWorld from "./HelloWorld";


function Display({products}){
    return(
        <>
        <table border="1">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <tbody>
        {
          products.map( (product) => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>

            </tr>
          )
         )  
        }
        </tbody>
        </table>
      
        </>
    );
}
export default Display;