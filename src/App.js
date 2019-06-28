import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/Header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
