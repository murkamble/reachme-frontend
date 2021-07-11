import React from "react"

import { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PageRender from './CustomRouter/PageRender'
import PrivateRouter from './CustomRouter/PrivateRouter'

import Home from './Containers/home'
import Login from './Containers/login'
import Register from './Containers/register'

import ForgotPass from './Containers/ForgotPassword'
import ResetPass from './Containers/ResetPassword'
// import NotFound from './Components/NotFound'

import ActivationEmail from './Containers/ActivationEmail'

import Alert from './Components/alert/Alert'
import Header from './Components/header/Header'
import StatusModal from './Components/StatusModal'

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './Redux/actions/auth.actions'
import { getPosts } from './Redux/actions/post.actions'
import { getSuggestions } from './Redux/actions/suggestions.actions'

import io from 'socket.io-client'
import { GLOBALTYPES } from './Redux/globalTypes'
import SocketClient from './SocketClient'

import { getNotifies } from './Redux/actions/notify.actions'
import CallModal from './Components/message/CallModal'
import Peer from 'peerjs'


const App = () => {
  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
    return () => socket.close()
  },[dispatch])

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])

  
  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {}
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {}
      });
    }
  },[])

 
  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])


  return (
    <Router>
      <Alert />

      <input type="checkbox" id="theme" />
      <div className={`App ${(status || modal) && 'mode'}`}>
        <div className="main">
          {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}

          <Switch>
          
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/forgot_password" component={ForgotPass} />
          <Route exact path="/user/reset/:access_token" component={ResetPass} />

          <Route exact path="/user/activation/:activation_token" component={ActivationEmail} />
          
          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
          
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App