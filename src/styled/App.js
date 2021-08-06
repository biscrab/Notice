import styled from 'styled-components'

export const Header = styled.div`
    position: relative;
    height: 50px;
    background-color: #008080;
    color: white;
    border: 0px;
    margin: 0px;
    padding: 0px;
`

export const Post = styled.div`
    position: relative;
    left: 15%;
    margin: 0px;
    display: flex;
`
export const Border = styled.ul`
    position: relative;
    width: 750px;
    height: 700px;
    border-top:	#008080 solid 2px;
    border-bottom: #008080 solid 2px;
    background-color: white;
    padding: 0px;
    list-style:none;
    margin-bottom: 0;
`
export const SmallTittle = styled.h3`
    position: relative;
    left: 15%;
    padding: 0;
    margin: 0;
    margin-top: 50px;
    color: #008080;
`
export const Button = styled.button`
    border: 0px;
    background-color: #008080;
    color: white;
    width: ${props => props.width};
    height: 40px;
    height: ${props => props.height};
    position: relative;
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    margin-top: ${props => props.marginTop};
    margin-right: ${props => props.marginRight};
`
export const LoginBorder = styled.div`
    width: 248px;
    height: 148px;
    border: 3px solid #008080;
    margin: 0px;
    position: relative;
    margin-left: 50px;
`

export const LoginInput = styled.input`
    background-color: whitesmoke;
    border: 0;
    height: 40px;
    margin-bottom: 5px;
    margin-right: 5px;
`

export const LoginInputGroup = styled.div`
    margin: 10px;
    height: 90px;
`

export const LoginBottomGroup = styled.div`
   border-top: 1px dashed #aaa;
`
export const box = styled.li`
    margin: 0;
    border: 0;
    border-bottom: 1px solid gray;
`

export const MoveButton = styled.div`
    display:flex;
    justify-content: center;
    background-color: #008080;
    color: white;
    width: 50px;
`

export const SignUp = styled.strong`
    position: relative;
    margin: 5px;
    top: 5px;
`

export const Writing = styled.div`
    margin-top: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    flex-direction:column;
    border: 2px solid gray;
    width: 1100px;
    height: 700px;
    margin-bottom: 50px;
`
export const WritingInput = styled.input`
    position: relative;
    left: 50%;
    transform: translateX(-50%); 
    font-size: large;
    width: 900px;
    height: 50px;
    border: 1px solid black;
`

export const WritingTextArea = styled.textarea`
    margin-top: 20px;
    font-size: 18px;
    position: relative;
    left: 50%;
    transform: translateX(-50%); 
    resize: none;
    width: 900px;
    height: 500px;
`
export const Tittle = styled.h1`
    position: relative;
    left: 30px;
    color: #008080;
` 

export const SignUpBorder = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    position: relative;
    width: 800px;
    height: 500px;
    left: 50%;
    transform: translateX(-50%);
`

export const SignUpText = styled.h3`
    position: relative;
    width: 200px;
    margin: 0;
    padding: 0;
`

export const SignUpInput = styled.input`
    position: relative;
    height: 25px;
    width: 300px;
    border: 1px solid black;
`
export const SignUpDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 50px;
    margin-top: ${props => props.mtop};
`

export const CheckInput = styled.input`
    position: absolute;
    top: 250px;
    left: 43.3%;
    height: 25px;
    width: 300px;
    border: 1px solid black;
    margin: 0;
`
export const MiddleTittle = styled.h1`
    color: #008080;
    position: relative;
    left: 10%;
`

export const Text = styled.div`
    width: 80%;
    height: 700px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-top: 2px solid	#008080;
`

export const NextDiv = styled.div`
    display: flex;
    position: relative;
    left: 650px;
    height: 30px;
`

export const CommentsBorder = styled.ul`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-top: 2px solid #008080;
    border-bottom: 2px solid #008080;
    height: 544px;
    width: 80%;
    list-style:none;
    margin: 0;
    padding: 0;
`

export const Comment = styled.li`
    border-bottom: 1px solid gray;
    display: flex;
`

export const Name = styled.p`
    width: 100px;
`

export const TPage = styled.p`
    position: relative;
    left: 1260px;
    height: 30px;
    font-size: 20px;
    margin: 0;
    border: 0;
`

export const Page = styled.p`
    position: relative;
    top: 0px;
    left: 160px;
    font-size: 20px;
    margin: 0;
    border: 0;
`

export const RegistCommentDiv = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    border-top: 2px solid #008080;
    border-bottom: 2px solid #008080;
    height: 300px;
    background-color: whitesmoke;
`
export const RegistCommentTextArea = styled.textarea`
    resize: none;
    font-size: 16px;
    width: 90%;
    height: 70%;
    top: 10%;
    left: 5%;
    position: relative;
`

export const Chat = styled.h3`
    position: relative;
    left: 9.5%;
    padding: 0;
    margin: 10px;
    color: #008080;
`

export const TNextDiv = styled.div`
    height: 30px;
`

export const Footer = styled.div`
    height: 100px;
`