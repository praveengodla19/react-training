

function Greeting(){

    const isLoggedIn = false;


    if(isLoggedIn){
        return <>
        <h2> Welcome back, User</h2>
        <button>{isLoggedIn ? "Logout" :"Login"}</button>
        </>
    
    }
    else return <>
        <h2> Logged in first</h2>
        <button>{isLoggedIn ? "Logout" :"Login" }</button>

        </>

}

export default Greeting;