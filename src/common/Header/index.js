import React, { Component } from 'react';
import { HeaderWrap, Logo, Nav, NavItem, NavSerch, Addition, Button, SearchWrap, SearchList, SearchInfoItem, SearchInfoTitle, SearchInfo, SearchInfoSwitch} from './style';
import { actionCreators } from './store'
import { GlobalStyle } from '../../static/iconfont/iconfont.js'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Header extends Component {
    getListArea () {
        const { focused, list, page, totalPage, mouseIn, handeMouseEnter, handeMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length) {
            for (let i = (page - 1) * 10 ; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn) {
            return (
              <SearchInfo 
                  onMouseEnter = { handeMouseEnter }
                  onMouseLeave = { handeMouseLeave }>
                  <SearchInfoTitle>热门搜索
                      <SearchInfoSwitch onClick={ () => handleChangePage(page,totalPage,this.spinIcon) }>
                        <span ref={(icon => {this.spinIcon = icon})} className='iconfont spin'>&#xe851;</span>
                        换一批
                      </SearchInfoSwitch>
                  </SearchInfoTitle>
                  <SearchList>
                      {pageList}
                  </SearchList>
              </SearchInfo>
            )
      
        }else {
            return null
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return (
            <div>
                <GlobalStyle></GlobalStyle>
                <HeaderWrap>
                    <Link to='/'>
                      <Logo />
                    </Link>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <NavItem className='right'>
                          <span className='iconfont'>&#xe636;</span>
                        </NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <SearchWrap>
                          <CSSTransition
                              in = {focused}
                              timeout ={200}
                              classNames = 'slide'
                          >
                              <NavSerch
                                  onFocus = { () => { handleInputFocus(list) } }
                                  onBlur = { handleInputBlur }
                                  className={ focused ? 'focused' : ''} 
                              ></NavSerch>
                          </CSSTransition>
                          <span
                              className={ focused ? 'focused iconfont zoom' : 'iconfont zoom'} 
                          >&#xe611;</span>
                          {
                              this.getListArea()
                          }
                        </SearchWrap>
                    </Nav>
                    <Addition>
                      <Button  className='writing'>
                         <span className='iconfont'>&#xe615;</span>
                         写文章
                      </Button>
                      <Button>注册</Button>
                    </Addition>
                </HeaderWrap>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handeMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handeMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
