import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom'
import { getUser } from 'services/ApiServices';

function Wait(props) {
    const {token} = useParams();
    const dispatch = useDispatch();
    const [user, setuser] = useState();
    useEffect(() => {
       if (user) {
           localStorage.setItem('token', token);
        if (user.admitted_workspaces.length === 0 && user.created_workspaces.length === 0) {
             dispatch({type:'user', user:user})
            return props.history.push('/rest/addtows');
                 
           } else {
            dispatch({type:'user', user:user})
            
            if(user.created_workspaces.length > 0){
                
                dispatch({type:'currentWs', currentWs:user.created_workspaces[0].workSpace});
                dispatch({type:'currentCh', currentCh:user.created_workspaces[0].workSpace.channels[0].channelId});
              }
              if (user.admitted_workspaces.length > 0) {
                

                dispatch({type:'currentWs', currentWs:user.admitted_workspaces[0].workSpace});
                dispatch({type:'currentCh', currentCh:user.admitted_workspaces[0].workSpace.channels[0].channelId});
              }
            return  props.history.push(`/ws/${user.created_workspaces[0].workSpace._id}` + '/'+ `${ user.created_workspaces[0].workSpace.channels[0].channelId._id}`);    
           }
       } 
    }, [user])
    const getUSerInfo = async(token) =>{
        try {
            let  res = await getUser(token)
            if (res.success) {
              
               setuser(res.user)

            }
            else{
            alert('please try loggin again')

            }
        } catch (e) {
            alert('please try loggin again')
        }
    }

    useEffect(() => {
        getUSerInfo(token)
    }, [])
    return (
        <div>
            Please wait you get redirected.....
        </div>
    )
}

export default withRouter(Wait)
