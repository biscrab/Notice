import React,{useState, useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import * as S from '../styled/App'
import Login from '../contents/Login'
import View from '../contents/View'
import Axios from 'axios'

const HomePage = () =>{

    let history = useHistory(); 

    const [page, setPage] = useState(1);
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
        }
    ])
    const [slists, setSlists] = useState([...lists]);

    const onWriting = () => {
        if(Login.login === false){
            alert("로그인을 해주세요");
        }
        else{
            history.push('/Writing');
        }
    }

    const nextList = () => {
        if(page < Math.ceil(lists.length / 10)){
            setPage(page + 1);
            setList();
        }
    }

    const prevList = () => {
        if(page > 1){
            setPage(page - 1);
            setList();
        }
    }

    const setList = () => {

    }

    //오류 있음

    return( 
        <S.Post>
            <div>
                <S.HBorder>
                    <S.SmallTittle>게시판</S.SmallTittle> 
                    <S.Total>총 {lists.length}개의 글이 있습니다.</S.Total>                 
                </S.HBorder>
            <S.Bheader>
                    <S.Category left="10px">번호</S.Category>
                    <S.Category left="280px">제목</S.Category>
                    <S.Category left="550px">작성자</S.Category>
                </S.Bheader>
                    <S.Border>
                        <View
                            lists = {slists}
                        />
                </S.Border>            
            <S.NextDiv>
                <S.Button height="30px" width="70px" onClick={onWriting}>글쓰기</S.Button>
                <S.Page>{page}/{Math.ceil(lists.length / 10)}</S.Page>
                <S.Button width="30px" height="30px" left="590px" onClick={prevList}>◀</S.Button>
                <S.Button width="30px" height="30px" left="590px" onClick={nextList}>▶</S.Button>
                </S.NextDiv>   
            </div>
            <Login></Login>
        </S.Post>
    )
}

export default HomePage