import React from 'react'
import { useHistory } from 'react-router-dom';
import * as S from '../styled/App'

const Header = () => {

    let history = useHistory();

    return(
        <>
            <S.Header></S.Header>
        </>
    )
}

export default Header