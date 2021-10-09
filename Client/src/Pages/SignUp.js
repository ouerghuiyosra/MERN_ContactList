import "./SignUp.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {register} from '../Redux/Actions/authAction'

const SignUp = ({ history }) => {
    const [user, setUser] = useState({email:'',password:'', name:'' });


    const dispatch = useDispatch();

        const handleRegister = (e) => {
          e.preventDefault()
        dispatch(register(user, history));
         };

   const handleChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
  }; 
    return (
        <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin">
           
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" required  onChange={handleChange}/>
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <hr />
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"  name="password" required  onChange={handleChange}/>
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-label-group">
                    <input type="text" id="inputUserame" className="form-control" placeholder="name" name="name" required autofocus onChange={handleChange} />
                    <label htmlFor="inputUserame">Username</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"  onClick={e=>handleRegister(e)}>Register</button>
                  <a className="d-block text-center mt-2 small" href="#">Sign In</a>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SignUp
