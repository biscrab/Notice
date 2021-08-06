import React,{useState} from 'react'
import * as S from '../styled/App'
import Axios from 'axios'

const WritingPage = () => {

    const [notice, setNotice] = useState({
        tittle: "",
        contents: "",
    });

    function onRegist(){
        //등록
    }

    const {tittle, contents} = notice;

    const onChange = (e) => {
        const {name, value} = e.target;
        const nextNotice = {
            ...notice,
            [name] : value,
        }
        setNotice(nextNotice);
    }

    return(
        <>
            <S.Writing>
                <S.WritingInput name="tittle" nameonChange={onChange} placeholder="제목을 입력해 주세요."></S.WritingInput>
                <S.WritingTextArea name="contents" onChange={onChange} placeholder="내용을 입력해 주세요."></S.WritingTextArea>
                <S.Button width="100px" left="904px" top="3%">등록</S.Button>
            </S.Writing>
        </>
    )
}

export default WritingPage;