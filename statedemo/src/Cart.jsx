
function Cart(){
    const itemCount=1;
    return (
        <div>
            {itemCount > 0 && <p>You have {itemCount} in the Cart</p>}
        </div>
    );

}

export default Cart;