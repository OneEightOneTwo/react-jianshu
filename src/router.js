import React from 'react';
// 路由
import { Router, Route, Switch, Redirect } from 'dva/router';
// import IndexPage from './routes/IndexPage/IndexPage';
// 页面组件
import Index from './routes/JianShu/IndexPage/Index';
import UserList from './routes/JianShu/UserList/UserList';
import Sign from './routes/JianShu/Sign/Sign';

// 函数组件
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/index" exact component={Index} />
        <Route path="/userlist" exact component={UserList} />
        <Route path="/sign" exact component={Sign} />
        <Redirect path="/" to="/Index" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
