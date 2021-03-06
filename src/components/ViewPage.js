import React,{useState, useRef, useLayoutEffect} from 'react'
import * as S from '../styled/App'
import Comments from '../contents/Comments'
import Axios from 'axios'
import '../styled/App.css'

const ViewPage = () => {

    const [page, setPage] = useState(1);

    const [view , setView] = useState([
        {
            id: 1,
            tittle: 1,
            like: 1,
            unlike: 1,
            content: '1',
            author: '1',
        },
        {
            id: 2,
            tittle: 2,
            like: 2,
            unlike: 2,
            content: '1',
            author: '1',
        },
        {
            id: 3,
            tittle: 2,
            like: 2,
            unlike: 2,
            content: '1',
            author: '1',
        },
    ])

    //전체 댓글
    const [lists, setlists] = useState([
        {
            id: 1,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 2,
            nickname: 'test2',
            comment: 'test2',
        },
        {
            id: 3,
            nickname: 'test3',
            comment: 'test3',
        },
        {
            id: 4,
            nickname: 'test4',
            comment: 'test4',
        },
        {
            id: 5,
            nickname: 'test5',
            comment: 'test5',
        },

        {
            id: 6,
            nickname: 'test6',
            comment: 'test1',
        },
        {
            id: 7,
            nickname: 'test7',
            comment: 'test1',
        },
        {
            id: 8,
            nickname: 'test8',
            comment: 'test1',
        },
        {
            id: 9,
            nickname: 'test9',
            comment: 'test1',
        },
        {
            id: 10,
            nickname: 'test10',
            comment: 'test1',
        },
        {
            id: 11,
            nickname: 'test11',
            comment: 'test1',
        },
        {
            id: 12,
            nickname: 'test12',
            comment: 'test1',
        },
    ])

    const [slists, setSlists] = useState([...lists]);

    //다음 댓글 목록 으로 이동
    const nextComment = () => {
        if(page < Math.ceil(lists.length / 10)){
            setPage(page+1);
            console.log(page);
            setComment();
        }
    }

    //이전 댓글 목록으로 이동
    const prevComment = () => {
        if(page > 1){
            setPage(page-1);
            console.log(page);
            setComment();
        }
    }

    //오류 있음
    const setComment = () => {   
        
        const ulists = lists.reverse();

        console.log(ulists);

        if(page === 1){
            setSlists(ulists.slice(0, 10));
        }
        else{
            setSlists(ulists.slice(10*(page-1)+1, 10*(page-1)+11));
        }    

        console.log(slists);
    }

    return(
        <S.VBorder>
            <S.Text>
                <p style={{fontSize: "18px", margin: "10px"}}></p>  
                <S.MiddleTittle>
                <S.T>게시판</S.T>
                <S.Info>
                    <S.S>댓글{slists.length}</S.S>
                    <S.S>조회</S.S>
                    <S.S>추천</S.S> 
                </S.Info>
                </S.MiddleTittle>
                <S.LikeDiv>                
                    <S.Like>
                    <S.IL>추천</S.IL>
                    <S.NL>2</S.NL>
                    </S.Like>
                    <S.Like>
                    <S.IL>비추천</S.IL>
                    <S.NL>1</S.NL>
                    </S.Like> 
                </S.LikeDiv> 
            </S.Text>
            <S.Chat>댓글</S.Chat>
            <S.CommentsBorder>
                <Comments 
                    lists={slists}
                />
            </S.CommentsBorder>
            <S.TNextDiv>
            </S.TNextDiv>
            <S.RegistCommentDiv>
                <S.RegistCommentTextArea />
                <S.RButton>댓글 달기</S.RButton>
            </S.RegistCommentDiv>
        </S.VBorder>
    );
}

export default ViewPage;