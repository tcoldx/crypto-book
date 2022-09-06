import React, {useEffect, useState} from 'react'
import {ChatWrap, WholeContainer, CommentBox, SendButton, MessageContainer, CommentInput, LoginContainer, Message} from "./Chat.styles"
import {
  BsFillChatLeftFill, BsFillPersonFill } from "react-icons/bs";
  import ScrollToBottom from "react-scroll-to-bottom";
  import {RiLockPasswordLine} from "react-icons/ri";
  import { io } from "socket.io-client";
  const socket = io.connect("http://localhost:3001");
  
export const Chat = (props) => {
  const [success, setSuccess] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [savedData, setSavedData] = useState({})
  const [messages, setMessages] = useState([]); 
  const [text, setText] = useState(""); 
  const handleLogin = () => {
    if (username !== "" && password !== "") {
      setSuccess(true)
      const savedLogin = {
        user: username,
        password: password,
        success: success,
        room: "suko",
      }
      setSavedData(savedLogin)
       socket.emit("loggedin", savedLogin.room)
    }
      setUsername("");
      setPassword("");
  }

  const handleSend = async () => {
    if (text !== "") {
    const messageData = {
      message: text,
      user: savedData.user,
      room: "suko",
    }
    
    setMessages((list) => [...list, messageData]) 
    await socket.emit("send-message", messageData)
     setText("")
  }
    } 
    

  useEffect(() => {
    socket.on("recieve-message", (data) => {
      setMessages((list) => [...list, data])
    });
        // eslint-disable-next-line
  }, [socket])

  return (
    <WholeContainer>
      {success && <div>Logged in as: {savedData.user}</div>}
      {!success ? (
      <LoginContainer>
        <div className="login-wrap">
          <div className='login-header'>
            <h2>Login</h2>
          </div>
          <div className='login-body'>
            <form>
          <div className="leftwrap"><BsFillPersonFill className='left'/><input type="text" placeholder='User' onChange={(e) => setUsername(e.target.value)} value={username}/></div>
          <div className="leftwrap"><RiLockPasswordLine className='left'/><input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} value={password} /></div>
          </form>
          </div>
          <div className='login-footer'>
          <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </LoginContainer>)
 : (

    
      <ChatWrap>
     <div className="chat-header"></div> 
     <div className='chat-body'>
      <ScrollToBottom className='containment'>
      <div className="inner-chat">
        
        {messages?.map(message => {
          return (
          <MessageContainer id={savedData.user === message.user ? "you" : "other"}>
            <div className='info'>
            <Message id={savedData.user === message.user ? "you" : "other"}>{message.message}</Message>
            <span>{message.user}</span>
            </div>
            </MessageContainer>
          )
        })}
   
        </div>
          </ScrollToBottom>
      </div>
      <CommentBox>
      <CommentInput value={text} onKeyPress={(e) => e.key === "Enter" && handleSend()} onChange={(e) => setText(e.target.value)} placeholder='hi..'/>
      <SendButton>
        <BsFillChatLeftFill onClick={handleSend}/>
        </SendButton>
      </CommentBox>
      </ChatWrap>
      )
}
      </WholeContainer>
  )
}


export default Chat