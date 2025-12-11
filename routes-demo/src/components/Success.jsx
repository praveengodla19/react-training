import { useParams } from "react-router-dom";
function Success(){
    const {username} =useParams();
    return(
        <>
        <h2>Success, welcome {username}!</h2>
        </>
    );
}

export default Success;