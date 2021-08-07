import React, {useState, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import * as S from '../styled/App'

const View = ({item}) => {

    let history = useHistory();

    return(
        <>
            <S.box onClick={() => history.push("/View/"+item.id)}>
                <S.Number>{item.id}</S.Number><p>{item.tittle}</p>
            </S.box>
        </>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
            <View key={item.id} item={item} tittle={item.tittle} />
        )
    )
    return itemList
}

export default List;