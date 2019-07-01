import React, { PureComponent } from 'react';
import { LoginWrap, LoginBox, Input, Button } from './style'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if(!loginStatus) {
      return (
        <LoginWrap>
          <LoginBox>
            <Input placeholder="账号" ref={ (input) => this.account = input }/>
            <Input placeholder="密码" type='password' ref={ (input) => this.password = input }/>
            <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
          </LoginBox>
        </LoginWrap>
      );
    }else {
      return <Redirect to='/'></Redirect>
    }
    
  }
  componentDidMount() {
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
}) 

const mapDispatch = (dispatch) => ({
  login(accountElem,passwordElem) {
    dispatch(actionCreators.login(accountElem.value,passwordElem.val))
  }
}) 

export default connect(mapState,mapDispatch)(Detail);
