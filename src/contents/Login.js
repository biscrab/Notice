import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import * as S from '../styled/App'

const Login = () => {

    const [login, setLogin] = useState(false);

    let history = useHistory();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([
        {
            name: "test",
            id: "test",
            password: "test",
        },
        {
            name: "test2",
            id: "test2",
            password: "test2",
        }

    ])

    const [u, setU] = useState({name: '', id: '', password: ''});

    const onLogin = () => {

        setU(user.find(isId));

        if(id === ""){
            alert("아이디를 입력해 주세요");
        }
        else if(password ===""){
            alert("비밀번호를 입력해 주세요");
        }
        else if(u === undefined){
            alert("존제하지 않는 아이디 입니다.");
        }
        else if(u.id === id){
                if(u.password === password){
                    setLogin(true);
                }
                else{
                    alert("잘못된 비밀번호 입니다");
                }
        }
    }

    const isId = (element) => {
        if(element.id === id){
            return true;
        }
    }

    return(
        <S.LoginBorder>
            <S.LoginInputGroup>
            {login ?  
                <>
                <p>로그인 완료</p>
                <p>{u.name}님 안녕하세요.</p>
                </> 
                :
                <>
                <S.LoginInput onChange={(e) => setId(e.target.value)} value={id}></S.LoginInput>
                <S.LoginInput type="password" onChange={(e) => setPassword(e.target.value)} value={password}></S.LoginInput>
                <S.Button left="5px" width="60px" onClick={onLogin}>로그인</S.Button>
                </>
            }
            </S.LoginInputGroup>
            <S.LoginBottomGroup>
                {login ? <S.SignUp onClick={() => setLogin(false)}>로그아웃</S.SignUp>:    
                <> 
                    <S.SignUp onClick={()=>{history.push('/SignUp')}}>회원가입</S.SignUp>
                </>}
            </S.LoginBottomGroup>
        </S.LoginBorder>
    );
}

export default Login