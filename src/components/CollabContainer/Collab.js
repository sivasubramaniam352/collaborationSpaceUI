import React, { useEffect, useState } from "react";
import MessageView from "components/MessageContainer/MessageView";
import Editor from "components/Editor/Editor";
import { useDispatch, useSelector } from "react-redux";
import { getAllchats } from "services/ApiServices";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { TiAttachmentOutline } from "react-icons/ti";
import { MdSend } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import {storage} from '../../services/FBServices'
import "./collabStyle.css";
import Thread from "./Thread";
import { addChat } from "services/ApiServices";
import { updateChat } from "services/ApiServices";
import { deleteChat } from "services/ApiServices";
import { create } from "lodash";
const Collab = ({ screen }) => {
  const dispatch = useDispatch();
  const currentCh = useSelector((state) => state.currentCh);
  const currentWs = useSelector((state) => state.currentWs);
  const user = useSelector((state) => state.user);

  const [chats, setChats] = useState(
    //     [
    // {
    //     channel:"this",
    //     workSpace:'this',
    //     message:`<p>hey! how is it going guys? </p>`,
    //     by:{
    //         picture:''
    //     },
    //     tags:'',
    //     attachments:'',

    //     active:true
    // },
    // {
    //     channel:"this",
    //     workSpace:'this',
    //     message:`<p> Going good sir. </p>`,
    //     by:{
    //         picture:''
    //     },
    //     tags:'',
    //     attachments:'',

    //     active:true
    // },
    // {
    //     channel:"this",
    //     workSpace:'this',
    //     message:`<p> sir please do POC this : </p>
    //     <a href='https://google.com'>https://google.com </a>
    //     `,
    //     by:{
    //         picture:''
    //     },
    //     tags:'',
    //     attachments:'',

    //     active:true
    // },
    // {
    //     channel:"this",
    //     workSpace:'this',
    //     message:`<p>Today&#39;s Report</p>

    //     <ol>
    //         <li>designed layouts</li>
    //         <li>connected api</li>
    //         <li>added functionalities
    //             <br>&nbsp; &nbsp; &nbsp;</li>
    //     </ol>

    //     `,
    //     by:{
    //         picture:''
    //     },
    //     tags:'',
    //     attachments:'',

    //     active:true
    // },

    // ]
    []
  );
  const [Msg, setMsg] = useState("");
  const [updateMsg, setupdateMsg] = useState("");
  const [thread, setThread] = useState(false);
  const getAllCons = async () => {
    // console.log(currentWs, currentCh, user._id, "I");
    try {
      let res = await getAllchats(currentWs._id, currentCh._id, user._id);
      if (res.success) {
        setChats(res.chats);
        res.chats.map((e, i) => {
          setRefs({ ...refs, [e._id]: React.createRef() });
        });
      } else {
        console.log(res.error);
      }
    } catch (e) {
      // console.log(e.message)
    }
  };
  useEffect(() => {
    setChats([]);
  }, [currentWs, currentCh]);
  useEffect(() => {
    const loop = setInterval(() => {
      getAllCons();
    }, 2000);

    return () => {
      console.log("cleaning up");
      clearInterval(loop);
    };
  }, [currentWs, currentCh]);

  const handleEditorChange = (e) => {
    setMsg(e);
  };
  const uploadChangehandler = (e) => {
    const data = e.target.files[0];
    data.url = URL.createObjectURL(e.target.files[0]);
    setPreAttachments([...Preattachments, data]);
  };


 const firebaseImageUpload = async(uri, mediaInfo) =>{

    let data  = await fetch(uri);
    let blob = await data.blob();
    let filename =Math.floor( Math.random() * 10000000);

  const uploadImg = await storage.ref(`post/${filename}.jpg`).put(blob);
  console.log(uploadImg);
  const url = await storage.ref(`post`).child(`${filename}.jpg`).getDownloadURL();
    console.log(url, 'url123');
  return {url};
}
  const [attachments, setAttachments] = useState([]);
  const [Preattachments, setPreAttachments] = useState([]);
  const [chatId, setchatId] = useState("");
  const [refs, setRefs] = useState({});
  const [upadteMsgId, setupadteMsgId] = useState("");
  const updateChatHandler = async () => {
    try {
      let token = localStorage.getItem("token");
      let res = await updateChat(
        {
          chatId: upadteMsgId,
          message: updateMsg,
        },
        token
      );
      console.log(res);
      if (res.success) {
        setupadteMsgId("");
        setupdateMsg("");
        console.log(res);
      } else {
        console.log(res.error);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deleteMsg = async(id) => {
    try {
      let token = localStorage.getItem("token");

        let res = await deleteChat({chatId:id},token);
        if (res) {
            console.log(res);
        }
        else{
            console.log(res.error);
        }
    } catch (e) {
        console.log(e);
    }
  };
  const mapChats = () => {
    return chats.map((e, i) => {
      return (
        <div
          className={"border_bottom"}
          ref={refs[i]}
          onClick={() => {
            setchatId(e._id);

            // setThread(true)
          }}
        >
          <MessageView
            data={e}
            updateHandler={(id, msg) => {setupadteMsgId(id)
            setupdateMsg(msg)
            }}
            deleteHandler={(id) => deleteMsg(id)}
          />
          {
            <Collapse isOpen={upadteMsgId === e._id}>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                {upadteMsgId === e._id && (
                  <Editor
                    handleEditorChange={(e) => setupdateMsg(e)}
                    value={updateMsg}
                  />
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    className={"cursor"}
                    style={{
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      borderRadius: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      boxShadow:
                        "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",
                      cursor: "pointer",
                      marginLeft: "30px",
                    }}
                    onClick={() => updateChatHandler()}
                  >
                    <MdSend size={"1.3rem"} />
                  </div>

                  <div
                    className={"cursor"}
                    style={{
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      borderRadius: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      boxShadow:
                        "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",
                      cursor: "pointer",
                      marginLeft: "30px",
                    }}
                    onClick={() => setupadteMsgId("")}
                  >
                    <IoClose size={"1.3rem"} />
                  </div>
                </div>
              </div>
            </Collapse>
          }{" "}
        </div>
      );
    });
  };
  //horizontal silder of attachments
  const mapPreAttachments = () => {
   return Preattachments.map((e, i) => {
        return <img

        style={{
            width:'150px',
            height:'100px'
        }}
        src={e.url}
        />
    })
  };

  const chatCreateInit = async() =>{
    if(Preattachments.length > 0){
        // console.log(Preattachments, "ATTA");
     let att = await Preattachments.map(async (c,i) => {
          return await firebaseImageUpload(c.url, c)
        });

        console.log(att, "ATTA");
        return createChat(att);
      }
      else{
          return createChat()
      }
  }
  const createChat = async (att) => {
      
    try {
      let res = await addChat({
        channel: currentCh._id,
        workSpace: currentWs._id,
        by: user._id,
        message: Msg,
        attachments: att,
      });
      if (res.success) {
        setMsg("");

        getAllCons();
      } else {
        alert(res.error);
      }
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className={"flex"}>
      <div
        className={thread ? "collabContainer_Reduce_Width" : "collabContainer"}
      >
        <div
          style={{
            height: "74vh",
            overflow: "auto",
          }}
        >
          {mapChats()}
        </div>
        <div>{mapPreAttachments()}</div>
        <div
          style={{
            display: "flex",
          }}
        >
          
          <div className={"editor_Cont"}>
            <Editor
              handleEditorChange={(e) => handleEditorChange(e)}
              value={Msg}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
            }}
            className={"upload_send_btn_container"}
          >
            <div
              className={"cursor"}
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                boxShadow:
                  "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",

                cursor: "pointer",
              }}
              onClick={() => chatCreateInit()}
            >
              <MdSend size={"1.3rem"} />
            </div>
            {/* <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={(e) => uploadChangehandler(e)}
              />

              <div
                className={"cursor"}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  boxShadow:
                    "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",
                  cursor: "pointer",
                }}
              >
                <TiAttachmentOutline size={"1.3rem"} />
              </div>
            </label> */}
          </div>
        </div>
      </div>
      {thread && (
        <div className={"thread_container"}>
          <Thread exitFun={() => setThread(false)} chatId={chatId} />
        </div>
      )}
    </div>
  );
};

export default Collab;
