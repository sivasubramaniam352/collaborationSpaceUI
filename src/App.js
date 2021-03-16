import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
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
    const [userInfo, setuserInfo] = useState({});
    const [loading, setloading] = useState(true);
    const token = localStorage.getItem('token');
      // //fun to fetch user Info
  const getUSerInfo = async() =>{
    
    let token = localStorage.getItem('token');
    
    try {
      let res = await getUser(token);
      if (res.success) {
        
        console.log(res.user, "useer");
        setuserInfo(res.user);

        dispatch({type:'user', user:res.user})

        
        return setloading(false);
    
      } else {
        return setloading(false);

        console.log(res.message);
      }
    } catch (e) {
      return setloading(false);

      console.log(e.message);
    }
  }

  //fetch user after rendering
  useEffect(() => {
    getUSerInfo();
  }, [])
    // console.log("TOkr", token);
if (loading) {
  return <div
  style={{
    width:'100vw',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }}
  >
please wait ...
  </div>
}
    return (
        <BrowserRouter>
    <Switch>
      <Route path="/ws" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/rest" render={(props) => <RestLayOut {...props} />} />
      
      {Object.keys(userInfo).length > 0 ?<Redirect from="/" to={`/ws/${userInfo.created_workspaces[0].workSpace._id}` + '/'+ `${ userInfo.created_workspaces[0].workSpace.channels[0].channelId}`} /> : <Redirect from="/" to="/auth/login" />
      }

      {/* <Redirect from="/" to="/admin/index" /> */}
    </Switch>
  </BrowserRouter>
    )
}

export default App
