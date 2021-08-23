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
        {
            id: 16,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 17,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 18,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 19,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 20,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 21,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 22,
            tittle: 'tittle',
            author: 'author'
        },
        {
            id: 23,
            tittle: 'tittle',
            author: 'author'
        },
    ])

    const [p, setP] = useState(Number(history.location.search.slice(2)));

    const [pagen, setPagen] = useState([]);

    const [plist, setPlist] = useState([]);
    const [slists, setSlists] = useState([]);

    useEffect(()=>{
        setP(history.location.search.slice(2));

        if(1 == 2){
            history.push('/p?=1');
        }
    })

    const onWriting = () => {
        if(Login.login === false){
            alert("로그인을 해주세요");
        }
        else{
            history.push('/Writing');
        }
    }

    const maxPage = 11;

    const setPage = () => {
        var list = [];
        for(var i = 1; i <= 12/*Math.ceil(lists.length/30)*/; i++){
          list.push({id: i});
        }

        if(Number(p)-2 < 0){
            if(Number(p)+3 > list.length){
                setPlist(list.slice(0, list.length));
                console.log('a');
            }
            else{
                setPlist(list.slice(0, Number(p)+4));
                console.log('b');
            }
        }
        else{
            if(Number(p)+3 > list.length){
                setPlist(list.slice(Number(p)-3, list.length));
                console.log('c');
            }
            else{
                setPlist(list.slice(Number(p)-3, Number(p)+2));
                console.log('d');
            }
        }
    }

    useEffect(() =>{
        setSlists(lists.reverse());
        setPage();
    },[])

    const prev = () => {
        history.replace(`/p?=${Number(p)-3}`);
        setPage();
    }

    const prevall = () => {
        history.replace(`/p?=${1}`);
        setPage();
    }

    const next = () => {
        history.replace(`/p?=${Number(p)+3}`);
        setPage();
    }

    const nextall = () => {
        history.replace(`/p?=${maxPage}`);
        setPage();
    }

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
                    <S.Button height="35px" width="80px" onClick={() => history.push('/Writing')}>글쓰기</S.Button>
                    <S.Sbox>
                    <S.Select>
                        <option>전체</option>
                        <option>제목</option>
                        <option>작성자</option>
                    </S.Select>
                    <S.Search></S.Search>
                    <S.Button height="35px" width="80px" onClick={() => console.log(plist)}>검색</S.Button>
                    </S.Sbox>
                </S.NextDiv>   
            </S.TBorder>
        </S.Post>
            <S.PageDiv>
                {Number(p)-3 > 0 ? <S.PageButton onClick={()=>prevall()}>{'<<'}</S.PageButton> : <></> }
                {Number(p)-3 > 0 ? <S.PageButton onClick={()=>prev()}>{'<'}</S.PageButton> : <></>}
                <Page lists={plist}
                />
                {Number(p)+3 < maxPage ? <S.PageButton onClick={()=>next()}>{'>'}</S.PageButton> : <></>}
                {Number(p)+3 < maxPage ? <S.PageButton onClick={()=>nextall()}>{'>>'}</S.PageButton> : <></>}
            </S.PageDiv>
        </>
    )
}

export default HomePage