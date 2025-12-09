
function RenderRole(){

    const role="praveen";
    switch(role){
        case "admin" : return <h2> User has Admin Role</h2>;
        case "trainer" : return <h2> User has Trainer Role</h2>;
        case "participant" : return <h2> User has participant Role</h2> ; 
        default: return <h2>Guest User</h2>
      }

}

export default RenderRole;