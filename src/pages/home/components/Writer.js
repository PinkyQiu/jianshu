import React, { PureComponent } from 'react';
import { WriterWrap, SearchInfoTitle, SearchInfoSwitch, SearchList, SearchItem } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { CSSTransition } from 'react-transition-group'

class Writer extends PureComponent {
  render() {
    const { writerList, page, totalPage, handleChangeWriterPage } = this.props;
    const newList = writerList.toJS();
    const pageList = [];
    if(newList.length) {
      for (let i = (page - 1) * 5 ; i < page * 5; i++) {
          pageList.push(
            <SearchItem key={newList[i].index}>
              <img src={newList[i].img} alt="" className="img"/>
              <div className="attention">+关注</div>
              <div className="desc">
                <p className="top">{newList[i].name}</p>
                <p className="btm">{newList[i].desc}</p>
              </div>
          </SearchItem>
          )
      }
  }
    return (
      <div>
        <WriterWrap>
          <SearchInfoTitle>热门搜索
            <CSSTransition
              timeout ={200}
              classNames = 'slide'>
              <SearchInfoSwitch onClick={ () => handleChangeWriterPage(page,totalPage,this.spinIcon) }>
                <span  ref={(icon => {this.spinIcon = icon})} className='iconfont spin'>&#xe851;</span>
                换一批
              </SearchInfoSwitch>
            </CSSTransition>
          </SearchInfoTitle>
          <SearchList>
            {pageList}
          </SearchList>
        </WriterWrap>
      </div>
    );
  }
  componentDidMount() {
    const { page, totalPage, handleChangeWriterPage } = this.props;
    handleChangeWriterPage(page,totalPage,this.spinIcon)
  }
}
const mapStateToProps = (state) => {
  return {
      writerList: state.getIn(['home','writerList']),
      page: state.getIn(['home','page']),
      totalPage: state.getIn(['home','totalPage']),
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleChangeWriterPage(page, totalPage, spin) {
      // dispatch(actionCreators.changeList(writerList))
      dispatch(actionCreators.getList())
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

export default connect(mapStateToProps, mapDispathToProps)(Writer);

