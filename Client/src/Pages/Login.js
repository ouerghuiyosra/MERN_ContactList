
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Actions/authAction";
import "./login.css";
const Login = ({history}) => {
    const [user, setuser] = useState({email:'',password:''})
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };



    return (
        <div>
        <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form>
                
                      <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"     name="email"   onChange={handleChange} required autofocus />
                        <label htmlFor="inputEmail">Email address</label>
                      </div>
                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" onChange={handleChange}  required />
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" onClick={e=>handleLogin(e)} type="submit">Sign in</button>
                      <div className="text-center">
                        <a className="small" href="#">Forgot password?</a></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    )
}

export default Login
