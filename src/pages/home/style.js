import styled from 'styled-components';
export const HomeWrap = styled.div`
  width:960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img{
    width:100%;
  }
`
export const HomeRight = styled.div`
  width:240px;
  float:right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 20px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  color: #000;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  margin-left: 18px;
  .topic-pic{
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow:hidden;
  .img {
    display:block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 450px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendWrap = styled.div`
  padding-top: 30px;
`

export const RecommendItem = styled.div`
  float: right;
  width: 280px;
  .img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`
export const WriterWrap = styled.div`
  float: right;
  width: 280px;
  margin-top: 50px;
`
export const SearchInfoTitle = styled.div`
  font-size: 14px;
  color: #969696;
  height: 20px;
  margin-bottom: 10px;
  .spin{
      display:inline-block;
      font-size: 12px;
      margin-right:2px;
      transition: all .2s ease-in;
      transform-origin: center center;
  }
`

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
`
export const SearchList = styled.div`
  width: 280px;
`

export const SearchItem = styled.div`
  margin-top: 15px;
  line-height: 20px;
  .img {
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 10px;
  }
  .top{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  .btm{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .attention{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
`