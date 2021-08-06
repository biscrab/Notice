import React,{useState, useRef} from 'react'
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
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 5,
            nickname: 'test1',
            comment: 'test1',
        },

        {
            id: 6,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 7,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 8,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 9,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 10,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 11,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 12,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 13,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 14,
            nickname: 'test1',
            comment: 'test1',
        },
        {
            id: 15,
            nickname: 'test1',
            comment: 'test1',
        },

    ])

    const [slists, setSlists] = useState(lists.filter(lists => lists.id >= 1 && lists.id <= 10));

    //다음 댓글 목록 으로 이동
    const nextComment = () => {
        if(page < Math.ceil(lists.length / 10)){
            setPage(page + 1);
            setComment();
        }
    }

    //이전 댓글 목록으로 이동
    const prevComment = () => {
        if(page > 1){
            setPage(page - 1);
            setComment();
        }
    }

    //오류 있음
    const setComment = () => {
        var list = lists.division(10);
        setSlists(list[page]);
    }

    Array.prototype.division = function(n) {
        var arr = this;
        var len = arr.length;
        var cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
        var tmp = [];

        for(var i = 0; i < cnt; i++){
            tmp.push(arr.slice(0, n));
        }

        return tmp;
    }

    return(
        <>
            <S.MiddleTittle>제목</S.MiddleTittle>
            <S.Text>
                <div style={{height:"50px"}}></div>
                <b style={{fontSize: "18px", margin: "10px"}}></b>             
            </S.Text>
            <S.Chat>댓글</S.Chat>
            <S.CommentsBorder>
                <Comments 
                    lists={slists}
                />
            </S.CommentsBorder>
            <S.TNextDiv>
                <S.TPage>{page}/{Math.ceil(lists.length / 10)}</S.TPage>
                <S.Button width="30px" height="30px" left="86.1%" top="-30px" onClick={prevComment}>◀</S.Button>
                <S.Button width="30px" height="30px" left="86.1%" top="-30px" onClick={nextComment}>▶</S.Button>
            </S.TNextDiv>
            <S.RegistCommentDiv>
                <S.RegistCommentTextArea />
                <S.Button right="10px" top="62px">댓글 달기</S.Button>
            </S.RegistCommentDiv>
        </>
    );
}

export default ViewPage;