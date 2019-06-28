import React, { PureComponent } from 'react';
import { HomeWrap, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <HomeWrap>
        <HomeLeft>
          <img alt='' className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrap>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollToShow)
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
}) 

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollToShow() {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
}) 

export default connect(mapState,mapDispatch)(Home);
