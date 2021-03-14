import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUser } from 'services/ApiServices';

function Wait(props) {
    const {token} = useParams();
    const dispatch = useDispatch();
    const [user, setuser] = useState();
    useEffect(() => {
       if (user) {
        if (user.admitted_workspaces.length === 0 && user.created_workspaces.length === 0) {
             dispatch({type:'user', user:user})
            return props.history.push('/rest/addtows');
                 
           } else {
            dispatch({type:'user', user:user})
            return  props.history.push('/admin/index');    
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

export default Wait
