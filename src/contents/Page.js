import React, {useState, useRef, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import * as S from '../styled/App'

const Page = ({item}) => {

    let history = useHistory();
    
    const maxPage = item.length-1;
    const [p, setP] = useState(Number(history.location.search.slice(2)));

    useEffect(()=>{
        setP((Number(history.location.search.slice(2))));
    })
 
    return(
        <>
            {item.id === p ? <S.PageButton onClick={()=>history.replace(`/p?=${item.id}`)} color="whitesmoke" border="#00a495">{item.id}</S.PageButton> : <S.PageButton onClick={()=>history.replace(`/p?=${item.id}`)} color="white" border="black">{item.id}</S.PageButton>}
        </>
    );
}

const List = ({lists}) => {

    const itemList = lists.map(
        item => (
            <Page key={item.id} item={item}/>
        )
    )
    return itemList
}

export default List;