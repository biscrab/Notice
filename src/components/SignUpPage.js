import React,{useState, useEffect} from 'react'
import * as S from '../styled/App'
import axios from 'axios';

const SignUpPage = () => {

    useEffect(()=>{
       axios.get('/api/test')
        .then(res => console.log(user))
    })

    const [user, setUser] = useState({
        id: "",
        password: "",
        name: "",
        nickname: "",
    });

    const [check, setCheck] = useState();

    const onChange = (e) => {
        const {name, value} = e.target;
        const nextUser = {
            ...user,
            [name]: value,
        }
        setUser(nextUser);
    }
    
    const onSignUp = () => {
        if(user.id === "" && user.password === "" && user.name === "" && user.nickname === ""){
            alert("모두 입력해주세요");
        }
        else if(check !== user.password){
            alert("비밀번호가 일치하지 않습니다");
        }
        else if(user.password.length < 7 || user.password.length > 20){
            alert("비밀번호는 7글자 이상 20글자 이내 이여야 합니다.");
        }
        else if(user.nickname.length > 10){
            alert("이름은 최대 10글자 이내로 해야 합니다.");
        }
        else if(user.id.length > 10){
            alert("아이디는 최대 10글자 이내로 해야 합니다.");
        }
        else if(user.name.length > 10){
            alert("이름은 최대 10글자 이내로 해야 합니다.");
        }
        else{
            alert("회원가입이 완료 되었습니다.");
        }
    }

    return(
        <>
            <S.SignUpBorder>
                <S.SignUpDiv>
                    <S.SignUpText>아이디 입력</S.SignUpText>
                    <S.SignUpInput onChange={onChange} name="id" placeholder="아이디를 입력해 주세요.(10글자 이내)"></S.SignUpInput>
                </S.SignUpDiv>
                <S.SignUpDiv>
                    <S.SignUpText>닉네임 만들기</S.SignUpText>
                    <S.SignUpInput onChange={onChange} name="nickname" placeholder="닉네임을 입력해 주세요.(10글자 이내)"></S.SignUpInput>
                </S.SignUpDiv>
                <S.SignUpDiv>
                    <S.SignUpText>비밀번호 입력</S.SignUpText>
                        <S.SignUpInput onChange={onChange} name="password" placeholder="비밀번호를 입력해 주세요.(7글자 이상 20글자 이내)" type="password"></S.SignUpInput> 
                </S.SignUpDiv>
                        <S.CheckInput onChange={(e) => setCheck(e.target.value)} placeholder="비밀번호를 재확인해 주세요." value={check} type="password"></S.CheckInput> 
                <S.SignUpDiv mtop="100px">
                    <S.SignUpText>이름</S.SignUpText>
                    <S.SignUpInput onChange={onChange} name="name" placeholder="이름을 입력해 주세요.(10글자 이내)"></S.SignUpInput>
                </S.SignUpDiv>
                <S.Button width="100px" top="5%" left="69.5%" onClick={onSignUp}>회원가입</S.Button>
            </S.SignUpBorder>
        </>
    );
}

export default SignUpPage;