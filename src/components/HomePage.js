import React,{useState, useRef} from 'react'
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
        },
        {
            id: 2,
            tittle: 'tittle'
        }
    ])
    const [slists, setSlists] = useState([]);

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

    //오류 있음
    const setList = () => {
        const list = lists.division(10);
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
            <S.SmallTittle>게시판</S.SmallTittle>
            <S.Post>
                <div>
                    <S.Border>
                        <View 
                            lists = {lists}
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

        </>
    )
}

export default HomePage