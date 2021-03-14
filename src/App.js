import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import RestLayOut from "layouts/Rest.js";

import { useSelector, useDispatch } from 'react-redux'
import { getUser } from 'services/ApiServices';
import { CONFIG } from 'Global/GlobalCreds';
const App = (props) => {
  const dispatch = useDispatch();
    // const user = useSelector(state => state.user)

    const token = localStorage.getItem('token');
      // //fun to fetch user Info
  const getUSerInfo = async() =>{
    
    let token = localStorage.getItem('token');
    if (!token) {
      props.history.push(`${CONFIG.UIUrl}/auth/register`)
    }
    try {
      let res = await getUser(token);
      if (res.success) {
        console.log(res.user);
        dispatch({type:'user', user:res.user})
    
      } else {
        console.log(res.message);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  //fetch user after rendering
  useEffect(() => {
    getUSerInfo();
  }, [])
    // console.log("TOkr", token);
    return (
        <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/rest" render={(props) => <RestLayOut {...props} />} />
      {!token? <Redirect from="/" to="/auth/login" />
      :<Redirect from="/" to="/admin/index" /> }

      {/* <Redirect from="/" to="/admin/index" /> */}
    </Switch>
  </BrowserRouter>
    )
}

export default App
