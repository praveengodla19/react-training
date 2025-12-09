import HelloWorld from "./HelloWorld";


function Display({products}){
    return(
        <>
    <table class="table table-dark">
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <tbody>
        {
          products.map( (product) => (
            <tr key={product.id} class="table-success">
                <td class="table-success">{product.id}</td>
                <td class="table-success">{product.name}</td>
                <td class="table-success">{product.price}</td>

            </tr>
          )
         )  
        }
        </tbody>
        </table>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
       
        </>
    );
}
export default Display;