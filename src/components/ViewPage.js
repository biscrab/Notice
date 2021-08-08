import React,{useState, useRef, useLayoutEffect} from 'react'
import * as S from '../styled/App'
import Comments from '../contents/Comments'
import Axios from 'axios'

const ViewPage = () => {

    const [page, setPage] = useState(1);

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
        <div>
            <div>
            <S.MiddleTittle>제목</S.MiddleTittle>
            <S.Text>
                <div style={{height:"50px"}}></div>
                <p style={{fontSize: "18px", margin: "10px"}}></p>             
            </S.Text>
            </div>
            <S.Chat>댓글</S.Chat>
            <div>
            <S.CommentsBorder>
                <Comments 
                    lists={slists}
                />
            </S.CommentsBorder>
            <S.TNextDiv>
            </S.TNextDiv>
            </div>
            <S.RegistCommentDiv>
                <S.RegistCommentTextArea />
                <S.Button right="10px" top="62px">댓글 달기</S.Button>
            </S.RegistCommentDiv>
        </div>
    );
}

export default ViewPage;