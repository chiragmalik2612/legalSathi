import "./Login.css";

const Login = () => {
    return (
        <form className="login">
    <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal"> Login</h1>

    <div className="form-floating">
      <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com" fdprocessedid="8q7ezn"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="eo928u"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-20 py-2" type="submit" fdprocessedid="xwu35f">Sign in</button>  </form>
    )
}

export default Login;