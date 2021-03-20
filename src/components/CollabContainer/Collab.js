import React, { useState } from 'react'
import MessageView from 'components/MessageContainer/MessageView';
import Editor from 'components/Editor/Editor';

const Collab = () =>{

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

const mapChats = () =>{
    return chats.map((e,i) =>{
       return <MessageView
            data={e}

            />

    })
}
    return (
        <div>
                <div
                style={{
                    height:'80vh',
                    overflow:'auto'
                }}
                >{mapChats()}
                </div>
                
                    <Editor 
                    
                    />
                
                    </div>
    )
}

export default Collab
