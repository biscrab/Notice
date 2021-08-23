import React, { useState, useRef } from 'react'
import {Redirect, Route} from 'react-router-dom'
import '../styled/App.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import * as P from '../pages'
import Header from '../contents/Header'
import * as S from '../styled/App'

function App() {

  return (
    <>
      <Header />
      <Route path='/p' component={P.Home}/>
      <Route exact path='/Writing' component={P.Writing}/>
      <Route exact path='/SignUp' component={P.SignUp}/>
      <Route path='/View' component={P.View}/>
      <Redirect from = "*" to ="/p?=1" />
      <S.Footer></S.Footer>
      <AmplifySignOut />
    </>
  );
}

export default withAuthenticator(App);
