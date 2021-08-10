import React,{useState, useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import * as S from '../styled/App'
import Login from '../contents/Login'
import View from '../contents/View'
import Axios from 'axios'

const HomePage = () =>{

    let history = useHistory(); 
    const [lists, setLists] = useState(
    [
        {
            id: 1,
            tittle: '제목',
            author: '저자'
        },
        {
            id: 2,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 3,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 4,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 5,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 6,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 7,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 8,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 9,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 10,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 11,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 12,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 13,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 14,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 15,
            tittle: 'tittle',
            author: 'author'
        },
    ])

    const [page, setPage] = useState(1);

    const [slists, setSlists] = useState(lists.reverse());

    useEffect(()=>{
        setSlists(lists.reverse());
    })

    const onWriting = () => {
        if(Login.login === false){
            alert("로그인을 해주세요");
        }
        else{
            history.push('/Writing');
        }
    }

    const nextList = () => {
        if(page < Math.ceil(lists.length / 14)){
            setPage(page + 1);
        }
    }

    const prevList = () => {
        if(page > 1){
            setPage(page - 1);
        }
    }

    const setList = () => {
        const rlists = lists.reverse();
        const list = rlists.slice((page-1)*10,(page-1)*10+9);
        console.log(page);
        setSlists(list);
    }

    //오류 있음

    useEffect(()=>{
        
    })

    return( 
        <>
        <S.Post>
            <S.TBorder>
                <S.HBorder>
                    <S.SmallTittle>게시판</S.SmallTittle> 
                    <S.Total>총 {lists.length}개의 글이 있습니다.</S.Total>                 
                </S.HBorder>
                <S.Bheader>
                    <S.CNumber>번호</S.CNumber>
                    <S.CTittle>제목</S.CTittle>
                    <S.CAuthor>작성자</S.CAuthor>
                </S.Bheader>
                <S.Border>
                    <View
                        lists = {slists}
                    />
                </S.Border>            
            <S.NextDiv>
                <S.Button height="30px" width="70px" onClick={onWriting}>글쓰기</S.Button>
                </S.NextDiv>   
            </S.TBorder>
        </S.Post>
        </>
    )
}

export default HomePage