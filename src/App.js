import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/Header'
import Home from './pages/home'
import Detail from './pages/details'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
