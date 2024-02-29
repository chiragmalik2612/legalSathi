import "./Signup.css";

const Signup = () => {
    return (
        <form className="signup">
    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">SignUp</h1>

    <div className="form-floating">
      <input type="text" className="form-control mb-2" id="floatingInput" placeholder="name" fdprocessedid="8q7ezn"/>
      <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com" fdprocessedid="8q7ezn"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control mb-2" id="floatingPassword" placeholder="Password" fdprocessedid="eo928u"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control mb-3" id="floatingPassword" placeholder="Password" fdprocessedid="eo928u"/>
      <label for="floatingPassword">Confirm Password</label>
    </div>
    <button className="btn btn-primary w-20 py-2" type="submit" fdprocessedid="xwu35f">Sign in</button>  </form>
    )
}

export default Signup;