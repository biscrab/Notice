import React,{useState, useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import * as S from '../styled/App'
import Login from '../contents/Login'
import View from '../contents/View'
import Axios from 'axios'
import '../styled/App.css'
import Page from '../contents/Page'

const HomePage = () =>{
    
    const [PageN, setPageN] = useState([]);
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
        setPageN([]);
        const num = Math.ceil(PageN.length/30);
        //for(var i = 1; i <= num; i++){
            //setPageN(...PageN, i);
        //}
        console.log(num);
        setPageN(...PageN,'>>');
    }
    
    console.log(1);

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
                    <ul>
                        <Page 
                            lists = {PageN}
                        />
                    </ul>
                    <S.Button height="35px" width="80px" onClick={onWriting}>글쓰기</S.Button>
                </S.NextDiv>   
            </S.TBorder>
        </S.Post>
        </>
    )
}

export default HomePage