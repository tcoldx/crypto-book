import styled from "styled-components";
import { css } from "styled-components";
export const WholeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
flex-direction: column;
`

export const LoginContainer = styled.div`
    background: ${props => props.theme.main};
    display: flex;
    justify-content: center;
    width: 35%;
    height: 50vh;
    margin-bottom: 10px;

    & .login-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4px;

        & input {
            padding: 10px;
            width: 90%;
            border: none;
        }
        & .left {
            background: #06d554;
            height: 35px;
            width: 30px;
        }
        & .leftwrap {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    & .login-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        padding: 15px;
        border-bottom: 0.5px solid gray;
    }

    & .login-footer {
        width: 100%;
        
        & button {
            color: white;
            padding: 10px;
            width: 100%;
            background: #06d554;
        }
    }

    & .login-wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
    }
`

export const Message = styled.div`
background: ${( props => props.id ==="you" ? "rgb(0,255,95)" : "lightblue")};
border-radius: 10px;
padding: 5px;
max-width: 70%;
width: fit-content;
height: 0.3rem 0.5rem;
overflow-wrap: anywhere;
`
export const MessageContainer = styled.div`
display: flex;  
width: 100%;
padding: 8px;
${props => props.id === 'you' && css`
display: flex;
justify-content: flex-end;
    `};

    ${props => props.id === "other" && css`
    justify-content: flex-start;
    `}

    & span {
        font-size: 12px;
    }

    & .info {
        display: flex;
        flex-direction: column;
    }

`
export const ChatWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: ${props => props.theme.main};
    width: 30%;
    height: 400px;
    margin: 20px;
    border-radius: 10px;

   & .containment {
   height: 100%;
   width: 100%;
   }

   &::-webkit-scrollbar {
    display: none;
   }

& .chat-header {
}
    & .chat-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        width: 100%;
    }

    & .inner-chat {
        height: fit-content;
        padding: 1rem 0.5rem; 
   
    }
`

export const CommentBox = styled.div`
display: flex;
align-items: center;
background: ${props => props.theme.card.secondary};
justify-content: space-between;
border-top-right-radius: 10px;
width: 100%;
height: 30px;

`

export const SendButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: green;
width: 30px;
height: 30px;
cursor: pointer;
border-top-right-radius: 10px;
`

export const CommentInput = styled.input`
border-radius: 6px;
border: none;
width: 80%;
outline: none;
background: ${(props) => props.theme.card.secondary};
color: green;
height: 30px;
margin-left: 10px;
`