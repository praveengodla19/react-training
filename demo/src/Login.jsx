function Login(){

    return(
        <>
        
 <div class="container d-flex justify-content-center align-items-center vh-100">
   <div class="card p-4 shadow" style="width: 22rem;">
     <h4 class="text-center mb-4">Login</h4>
     <form>
       <div className="mb-3">
         <label className="form-label">Email address</label>
         <input type="email" className="form-control" id="email" placeholder="Enter your email" />
       </div>
       <div class="mb-3">
         <label  className="form-label">Password</label>
         <input type="password" className="form-control" id="password" placeholder="Enter your password" />
       </div>
       <div className="mb-3 form-check">
         <input type="checkbox" class="form-check-input" id="rememberMe" />
         <label className="form-check-label" for="rememberMe">Remember me</label>
       </div>
       <button type="submit" className="btn btn-primary w-100">Login</button>
     </form>
     <p className="text-center mt-3">
       Forgot password? <a href="#">Click here</a><br/>
       Don't have an account? <a href="#">Register</a>
     </p>
   </div>
 </div>

        </>
    );

}

export default Login;