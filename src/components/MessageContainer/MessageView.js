import React from "react";
import "./MessageView.css";
import ProfileImg from "../../assets/img/icons/common/user.png";
import { BiTrash, BiMessageSquareEdit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
const MessageView = ({ data, updateHandler, deleteHandler }) => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {/* message */}
      <div className={"flex message_container  back"}>
        <img className={"profileImg"} src={data.by.picture || ProfileImg}></img>

        {/* Name with time */}
        <div className={"message_inner_cont"}>
          <div className={"flex name_date_conntainer "}>
            <span
              style={{
                fontWeight: "bolder",
              }}
            >
              {data.by.username || "sivasubramaniam"}
            </span>
            <span>
              {data.created_at
                ? `${new Date(data.created_at).getDay()}-${new Date(
                    data.created_at
                  ).getMonth()}-${new Date(data.created_at).getFullYear()}`
                : `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`}
            </span>
          </div>

          <div className={"message_content_container"}>
            <div dangerouslySetInnerHTML={{ __html: data.message }} />
          </div>
        </div>
      </div>
      {user._id === data.by._id && <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          <BiTrash onClick={() => deleteHandler(data._id)} />
        </div>

        <div
          style={{
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          <BiMessageSquareEdit onClick={() => updateHandler(data._id, data.message)} />
        </div>
      </div>}
    </div>
  );
};

export default MessageView;
