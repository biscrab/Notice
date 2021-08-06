import React from 'react'
import * as S from '../styled/App'

const Comments = ({item}) => {
    return(
        <S.Comment>
            <S.Name>{item.id}{item.nickname}</S.Name><p>{item.comment}</p>
        </S.Comment>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
          <Comments key={item.id} item={item} nickname={item.nickname} comment={item.comment}/>  
        ) 
    )
    return itemList
}

export default List