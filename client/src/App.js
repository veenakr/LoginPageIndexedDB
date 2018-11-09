import React from 'react';
import { Route, Router } from 'react-router-dom';
import Login from './components/Login';
import DashBoard from './components/Dashboard';
import { history } from './helpers/history';
import { connect } from 'react-redux';
import SignUp from './components/SignUp';
import Table from './components/Table';
import OtherUsers from './components/OtherUsers';


class App extends React.Component {
    render() {
      const user1 = localStorage.getItem('user');
        return (
            <Router history={history}>
                <div>
                  <Route path="/index.html" exact component={Login} />
                    {user1 ? <Route path="/" component={DashBoard} exact user={user1}/> : <Route path="/" component={Login} exact={true} />}
                    <Route path="/signup" component={SignUp} exact={true}/>
                    <Route path="/userInfo" component={Table} exact={true}/>
                    <Route path="/other" component={OtherUsers} exact={true} />
                </div>
            </Router>
        )
    }

}


const mapStateToProps = (state) => {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users
  };
}

export default connect(mapStateToProps)(App);