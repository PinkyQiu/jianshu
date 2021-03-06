import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Detail extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if(loginStatus) {
      return (
        <div>写文章</div>
      );
    }else {
      return <Redirect to='/login'></Redirect>
    }
    
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
}) 


export default connect(mapState,null)(Detail);
