import { Route, Switch } from "react-router-dom";
import './index.css';
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import  Contacts from "./Pages/Contacts"
import Error from "./Pages/Error"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import AddContact from "./Components/AddContact"
import PrivateRoute from "./router/privateRoute";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { current } from "./Redux/Actions/authAction";
import Alert from "./Components/alert";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
 const alerts = useSelector((state) => state.alertReducer);
  useEffect(() => {
      dispatch(current());
      // eslint-disable-next-line
  }, []);
  return (
  <div className="App">

     <NavBar/>
     {alerts !== null && alerts.length > 0 && (
      <div className='alertsContainer fixed-top'>
        <Alert className='alerts' alerts={alerts} />
      </div>
    )}
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/signUp' component={SignUp}/>
              <PrivateRoute path='/Contacts' component={Contacts}/>
              <Route path='/add' component={AddContact}/>
              <Route path="/*" component={Error}/>
          </Switch>
      
<Footer/>
  </div>
  );
}

export default App;
