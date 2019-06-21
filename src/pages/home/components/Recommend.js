import React, { Component } from 'react';
import { RecommendWrap,RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrap>
        {
          list.map((item) => {
            return (
              <RecommendItem key={item.get('id')}>
                <img src={item.get('imageUrl')} alt="" className="img"/>
              </RecommendItem>
            )
          })
        }
      </RecommendWrap>
    );
  }
}

const mapState = ((state) => ({
  list:  state.getIn(['home','recommondList'])
}))

export default connect(mapState)(Recommend);

