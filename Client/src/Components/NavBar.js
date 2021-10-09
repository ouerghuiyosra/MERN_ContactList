import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Nav, Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { current, logout } from '../Redux/Actions/authAction';


const NavBar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(current());
        
    }, [])
const isAuth = useSelector(state => state.authReducer.isAuth);

    return (
        <Navbar >
        <Nav  className="nav-link text-uppercase font-weight-bold">
            <Link to="/">Home</Link>
            {isAuth ? (
                <>
                <Link to='/login'>                
                <div
                    onClick={() => dispatch(logout())}
                >
                    LOGOUT
                </div></Link>
               <Link to='/Contacts'>Contacts</Link>
                </>

            ):(
                <>
                <Link to='/login'>login</Link>
                <Link to='/signUp'>SignUP</Link>

                </>
            )}

          
        

        </Nav>
  </Navbar>
    )
}

export default NavBar
