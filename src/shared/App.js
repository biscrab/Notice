import React, { useState, useRef } from 'react'
import {Route} from 'react-router-dom'
import '../styled/App.css'
import * as P from '../pages'
import Header from '../contents/Header'
import * as S from '../styled/App'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {

  return (
    <>
      <Header />
      <Route exact path='/' component={P.Home}/>
      <Route exact path='/Writing' component={P.Writing}/>
      <Route exact path='/SignUp' component={P.SignUp}/>
      <Route path='/View' component={P.View}/>
      <S.Footer></S.Footer>
    </>
  );
}

export default withAuthenticator(App);
