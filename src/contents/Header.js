import React from 'react'
import { useHistory } from 'react-router-dom';
import * as S from '../styled/App'

const Header = () => {

    let history = useHistory();

    return(
        <>
            <S.Header>
                <S.Home onClick={() => history.push("/p?=1")}>
                    게시판
                </S.Home>
            </S.Header>
        </>
    )
}

export default Header