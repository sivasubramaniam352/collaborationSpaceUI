import React from 'react'
import './MessageView.css'
import ProfileImg from '../../assets/img/icons/common/user.png'
const MessageView = ({data}) => {
    
    return (
        <div>
            {/* message */}
        <div
        className={'flex message_container border_bottom back'}
        >
            <img
            className={'profileImg'}
        src={data.by.picture || ProfileImg}

            >
            </img>
            
            {/* Name with time */}
            <div
            className={'message_inner_cont'}
            >
            <div
            className={'flex name_date_conntainer '}
            >
                <span 

                style={{
                    fontWeight:'bolder'
                }}
                >
                    {data.by.username || "sivasubramaniam"} 
                </span>
                <span>
                    {data.created_at ? `${new Date(data.created_at).getDay()}-${new Date(data.created_at).getMonth()}-${new Date(data.created_at).getFullYear()}`:`${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`}
                </span>

            </div>
               
            <div
                className={'message_content_container'}
                >
                <div dangerouslySetInnerHTML={{ __html: data.message}} />
                </div>
            </div>
          
            </div>   

        </div>
    )
}

export default MessageView
