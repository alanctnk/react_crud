import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home/Home'
import UserCrud from '../user/UserCrud'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UserCrud} />
      <Redirect from='*' to='/' />
    </Switch>
  )
}
