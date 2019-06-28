import React, { PureComponent } from 'react';
import { LoginWrap, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {
  render() {
    return (
      <LoginWrap>
        <LoginBox>
          <Input placeholder="账号"/>
          <Input placeholder="密码"/>
          <Button>登录</Button>
        </LoginBox>
      </LoginWrap>
    );
  }
  componentDidMount() {
  }
}
const mapState = (state) => ({
}) 
const mapDispatch = (dispatch) => ({
}) 

export default connect(mapState,mapDispatch)(Detail);
