import React from 'react'
import * as S from '../styled/App'

const Page = ({item}) => {
    <S.PageButton>{item.value}</S.PageButton>
}

const list = ({lists}) => {
    const itemlist = lists.map(
       item => (
           <Page value={item.value}/>
       )
    )
    return itemlist;
}

export default list;