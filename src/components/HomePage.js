import React,{useState, useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import * as S from '../styled/App'
import Login from '../contents/Login'
import View from '../contents/View'
import Axios from 'axios'
import '../styled/App.css'
import Page from '../contents/Page'
import { relativeTimeRounding } from 'moment'

const HomePage = () =>{
    
    const [PageN, setPageN] = useState([1,2,3]);
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

    const setPage = () => {
        const num = Math.ceil(PageN.length/30);
        console.log(PageN);
    }

    setPage();

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
                <S.Border className="border">
                    <View
                        lists = {slists}
                    />
                </S.Border>            
                <S.NextDiv>
                    <S.Button height="30px" width="80px" onClick={onWriting}>글쓰기</S.Button>
                    <S.SBorder>
                    <S.Select>
                        <option>전체</option>
                        <option>제목</option>
                        <option>작성자</option>
                    </S.Select>
                    <S.Search></S.Search>
                    <S.Button height="30px" width="80px">검색</S.Button>
                    </S.SBorder>
                </S.NextDiv>   
            </S.TBorder>
        </S.Post>
        <S.PageDiv>
            <S.PageButton>{'<'}</S.PageButton>
            <S.PageButton>1</S.PageButton>
            <S.PageButton>{'>'}</S.PageButton>
        </S.PageDiv>
        </>
    )
}

export default HomePage