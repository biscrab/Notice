import styled from 'styled-components'

export const Header = styled.div`
    position: relative;
    height: 50px;
    background-color: #4F86C6;
    color: white;
    border: 0px;
    margin: 0px;
    padding: 0px;
    display: flex;
`

export const Post = styled.div`
    position: relative;
    left: 50%;
    transform:translateX(-50%);
    margin: 0px;
    margin-right: 0px;
    display: flex;
    width: 1200px;
    background-color:white;
    @media (max-width: 600px){
        left: 0%;
        transform:translateX(0%);
        width: 100%;
    }
`
export const Border = styled.ul`
    margin-top: 0;
    position: relative;
    width: 1200px;
    height: 1200px;
    border-top:	#4F86C6 solid 2px;
    background-color: white;
    padding: 0px;
    list-style:none;
    margin-bottom: 0;
    @media (max-width: 600px){
        width: 100%;
    }
`

export const SmallTittle = styled.h3`
    position: absolute;
    padding: 0;
    margin: 0;
    width: 60px;
    color: #4F86C6;
`
export const Button = styled.button`
    border: 0px;
    background-color: #4F86C6;
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
    border: 3px solid #4F86C6;
    margin: 0px;
    top: 130px;
    left: 65%;
    position: relative;
    margin-left: 50px;
    @media (max-width: 600px){
        top: 950px;
        right: 67%;
    }
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
    height: 50px;
    display: flex;
    flex-direction: center;
`

export const MoveButton = styled.div`
    display:flex;
    justify-content: center;
    background-color: #4F86C6;
    color: white;
    width: 50px;
`

export const SignUp = styled.strong`
    position: relative;
    left: 5px;
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
    width: 75%;
    height: 700px;
    margin-bottom: 50px;
    @media (max-width: 600px){
        width: 100%;
    }
`
export const WritingInput = styled.input`
    position: relative;
    left: 50%;
    transform: translateX(-50%); 
    font-size: large;
    width: 80%;
    height: 50px;
    border: 1px solid black;
`

export const WritingTextArea = styled.textarea`
    margin-top: 20px;
    font-size: 15px;
    position: relative;
    left: 50%;
    transform: translateX(-50%); 
    resize: none;
    width: 80%;
    height: 500px;
`
export const Tittle = styled.h1`
    position: relative;
    left: 30px;
    color: #4F86C6;
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
export const MiddleTittle = styled.div`
    border-bottom: 1px solid gray;
`

export const Text = styled.div`
    width: 1200px;
    height: 700px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

export const NextDiv = styled.div`
    display: flex;
    position: relative;
    height: 30px;
`

export const CommentsBorder = styled.ul`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-top: 2px solid #4F86C6;
    border-bottom: 2px solid #4F86C6;
    height: 1200px;
    width: 1200px;
    list-style:none;
    margin: 0;
    padding: 0;
    @media (max-width: 600px){
        width: 100%;
    }
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
    left: 580px;
    font-size: 20px;
    margin: 0;
    border: 0;
`

export const RegistCommentDiv = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    border-top: 2px solid #4F86C6;
    border-bottom: 2px solid #4F86C6;
    height: 300px;
    background-color: whitesmoke;
    @media (max-width: 600px){
        width: 100%;
    }
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
    position: relative;;
    padding: 0;
    margin: 10px;
    color: #4F86C6;
`

export const TNextDiv = styled.div`
    height: 30px;
`

export const Footer = styled.div`
    height: 100px;
`

export const Number = styled.p`
    position: absolute;
    left: 20px;
`

export const Bheader = styled.div`
    margin-top: 10px;
    border-top: 2px solid #4F86C6;
    height: 30px;
    width: 1200px;
    display: flex;
    align-content: center;
    background-color: whitesmoke;
    @media (max-width: 600px){
        width: 100%;
    }
`
export const CNumber = styled.p`
    position: relative;
    height: 30px;
    margin: 0px;
    top: 5px;
    left: 1%;
`

export const Author = styled.p`
    position: absolute;
    left: 79.6%;

    @media (max-width: 600px){
        left: 82.5%;
    }
`

export const Total = styled.p`
    position: relative;
    color: #4F86C6;
    left: 84%;
    margin: 0px;
    width: 190px;
    @media (max-width: 600px){
        left: 45%;
    }
`

export const VTittle = styled.p`
    position: relative;
    left: 10.3%;
`

export const HBorder = styled.div`
    margin-top: 10px;
    @media (max-width: 600px){
        margin-top: 50px;
    }

`

export const TBorder = styled.div`
    margin-top: 50px;
    @media (max-width: 600px){
        width: 100%;
    }
`   

export const CTittle = styled.p`
    position: relative;
    height: 30px;
    margin: 0px;
    top: 5px;
    left: 7.5%;
    @media (max-width: 600px){
        left: 30%;
    }
`

export const CAuthor = styled.p`
    position: relative;
    height: 30px;
    margin: 0px;
    top: 5px;
    left: 74%;
    @media (max-width: 600px){
        left: 62.5%;
    }
`

export const VBorder = styled.div`
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 80px;
    @media (max-width: 600px){
        left: 0%;
        width: 100%;
        transform: translateX(0%);
    }
`

export const RButton = styled.button`
    position: relative;
    right: 10px;
    height: 40px;
    top: 62px;
    border: 0px;
    background-color: #4F86C6;
    color: white;
    @media (max-width: 600px){
        left: 77%;
        top: 11%;
    }
`

export const WButton = styled.button`
    position: relative;
    height: 40px;
    width: 100px ;
    left: 81.5%;
    top: 3%;
    border: 0px;
    background-color: #4F86C6;
    color: white;

    @media (max-width: 600px){
        left: 63%;
    }
`
export const PageButton = styled.button`
    border: 1px solid ${props => props.border};
    width: 35px;
    height: 35px;
    background-color: white;
    background-color: ${props => props.color};
    margin: 3px;
`

export const Search = styled.input`
    position: relative;
    height: 31px;
    width: 200px;
    border: 1px solid black;
`

export const Select = styled.select`
    background-color: #4F86C6;
    color: white;
    position: relative;
    height: 35px;
    width: 70px;
`

export const PageDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

export const Home = styled.h2`
    margin: 0;
    position: relative;
    top: 8px;
    left: 10px;
    height: 40px;
`

export const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction:row-reverse;
    height: 30px;
`

export const T = styled.div`
    margin: 0;
    background-color: whitesmoke;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    display: flex;
    height: 40px;
`

export const S = styled.span`
    margin-right: 10px;
`

export const Sbox = styled.div`
    position: relative;
    left: 63.7%;
    @media (max-width: 600px){
        top: 35px;
        left: -19%;
    }
`

export const Like = styled.div`
    height: 70px;
    width: 100px;
    border: 1px solid black;
    margin: 10px;
    display: flex;
    justify-content: center;
`

export const LikeDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 75%;
`

export const IL =  styled.span`
    height: 0;
`

export const NL = styled.h3`
    margin: 0;
    position: absolute;
    top: 35px;
    height: 0;
`