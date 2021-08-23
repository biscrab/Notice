import React,{useState, useEffect} from 'react'
import * as S from '../styled/App'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'

const WritingPage = () => {

    let history = useHistory();

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

    useEffect(()=>{
        if(notice.tittle !== '' || notice.contents !== ''){
            const unblock = history.block('진행 상황이 저장되지 않습니다. 정말로 나가시겠습니다.');
            return()=>{
                unblock();
            }
        }
    })

    return(
        <>
            <S.Writing>
                <S.WritingInput name="tittle" nameonChange={onChange} placeholder="제목을 입력해 주세요."></S.WritingInput>
                <S.WritingTextArea name="contents" onChange={onChange} placeholder="내용을 입력해 주세요."></S.WritingTextArea>
                <S.WButton>등록</S.WButton>
            </S.Writing>
        </>
    )
}

export default WritingPage;