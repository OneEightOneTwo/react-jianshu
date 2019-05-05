import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
// import IndexPage from './routes/IndexPage/IndexPage';
import Index from './routes/JianShu/IndexPage/Index';
import UserList from './routes/JianShu/UserList/UserList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/index" exact component={Index} />
        <Route path="/userlist" exact component={UserList} />
        <Redirect path="/" to="/Index" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
