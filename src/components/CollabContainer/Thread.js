import React, { useEffect, useState } from 'react'
import MessageView from 'components/MessageContainer/MessageView';
import Editor from 'components/Editor/Editor';
import { useDispatch, useSelector } from 'react-redux';
import { getAllchats } from 'services/ApiServices';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { TiAttachmentOutline } from 'react-icons/ti';
import { MdSend } from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
const Thread = ({exitFun, chatId}) =>{
const dispatch = useDispatch()
const currentCh = useSelector(state => state.currentCh);
const currentWs = useSelector(state => state.currentWs);
const user = useSelector(state => state.user);
const [attachments, setAttachments] = useState([]);

    
const [chats, setChats] = useState([
{
    channel:"this",
    workSpace:'this',
    message:`<p>hey! how is it going guys? </p>`,
    by:{
        picture:''
    },
    tags:'',
    attachments:'',

    active:true
},
{
    channel:"this",
    workSpace:'this',
    message:`<p> Going good sir. </p>`,
    by:{
        picture:''
    },
    tags:'',
    attachments:'',

    active:true
},
{
    channel:"this",
    workSpace:'this',
    message:`<p> sir please do POC this : </p>
    <a href='https://google.com'>https://google.com </a>
    `,
    by:{
        picture:''
    },
    tags:'',
    attachments:'',

    active:true
},
{
    channel:"this",
    workSpace:'this',
    message:`<p>Today&#39;s Report</p>

    <ol>
        <li>designed layouts</li>
        <li>connected api</li>
        <li>added functionalities
            <br>&nbsp; &nbsp; &nbsp;</li>
    </ol>
    
    `,
    by:{
        picture:''
    },
    tags:'',
    attachments:'',

    active:true
},

]);
const [Msg, setMsg] = useState('')
const getAllCons = async() =>{  
    try {
        let res = await getAllchats(currentWs._id, currentCh._id, user._id);
        if (res.success) {
            setChats(res.chats);
        }
        // else{
        //     console.log(res.error)
        // }
    } catch (e) {
        // console.log(e.message)
    }
}
useEffect(() => {
    setInterval(() => {
   getAllCons();
    }, 1000);
}, [])

const handleEditorChange = (e) =>{
setMsg(e);
}
const mapChats = () =>{
    return chats.map((e,i) =>{
       return <MessageView
            data={e}

            />

    })
}

const uploadChangehandler= (e) =>{
    setAttachments([...attachments,e.target.files[0]])
}
    return (
        <div
       
        >
            <div
            style={{
                width:'100%',
                height:'30px',
                display:'flex',
                backgroundColor:'purple',
                color:'white',
                alignItems:'center',
                justifyContent:'space-between',
                paddingRight:'40px',
                paddingLeft:'20px',
            }}
            >
                <div>Threads</div>
                <AiOutlineClose 
                style={{
                    cursor:'pointer',

                }}

                onClick={() => exitFun()}
                />
            </div>
                <div
                style={{
                    height:'70vh',
                    overflow:'auto'
                }}
                >{mapChats()}
                </div>
                
                <div
               style={{
                    display:'flex',

               }}
               >
                   <div
                   
                   className={'editor_Cont'}
                   >
  <Editor 
                    handleEditorChange ={(e) => handleEditorChange(e)}
                    value={Msg}
                    />

</div>
<div 
        style={{
            display:'flex',
            flexDirection:'column-reverse',
           
        }}
        className={'upload_send_btn_container'}
        >
         <div
         className={'cursor'}
         style={{
             width:'40px',
             height:'40px',
             display:'flex',
             borderRadius:40,
             justifyContent:'center',
             alignItems:'center',
             backgroundColor:'white',
             boxShadow:'0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)',
          

            
         }}
         >
             <MdSend 
             size={'1.3rem'}
             />
         </div>
         <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"

          onChange={(e) => uploadChangehandler(e)}
        />
       
       
       <div
         className={'cursor'}
         style={{
             width:'40px',
             height:'40px',
             display:'flex',
             borderRadius:40,
             justifyContent:'center',
             alignItems:'center',
             backgroundColor:'white',
             boxShadow:'0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)',
            
         }}
         >
          <TiAttachmentOutline size={'1.3rem'} />
        
  </div>
       
      </label>

        </div>
               </div>
                 
               </div>
               
    )
}

export default Thread;