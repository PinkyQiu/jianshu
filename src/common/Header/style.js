import styled from 'styled-components';
import LogoPic from '../../static/logo.png';
export const HeaderWrap = styled.div`
  position:relative;
  height:56px;
  border:1px solid #eee;
`
export const Logo = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100px;
  height:56px;
  background: url(${LogoPic});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  margin: 0 15px;
  font-size: 17px;
  &.left {
      float: left;
  }
 &.right {
    float: right;
    color: #969696;
 }
 &.active {
    color: #ea6f5a;
 }
`
export const SearchWrap = styled.div`
    float: left;
    position:relative;
    .zoom{
        position:absolute;
        right: 10px;
        top: 13px;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 100%;
        line-height: 30px;
        &.focused {
            background: #777;
            color: #fff;
    }
}
`
export const SearchInfo = styled.div`
    position:absolute;
    left: 20px;
    top: 56px;
    z-index: 10;
    width: 250px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    padding: 20px 20px 10px;
    box-sizing: border-box;
    background: #fff;
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
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
`
export const SearchList = styled.div`
    overflow:hidden;
`
export const SearchInfoItem = styled.a`
      float: left;
      display: block;
      margin: 0 10px 15px 0;
      padding: 2px 6px;
      font-size: 12px;
      border: 1px solid #ddd;
      border-radius: 3px;
      color: #787878;
`

export const NavSerch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 180px;
    height: 38px;
    line-height: 38px;
    background: #eee;
    padding: 0 40px 0 20px;
    outline:none;
    border: none;
    margin-top: 9px;
    margin-left: 20px;
    border-radius: 19px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;  
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 180px;  
    }
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    height: 38px;
    margin-top: 9px;
    border: 1px solid rgba(236,97,73,.7);
    line-height: 38px;
    padding: 0 20px;
    color: #ea6f5a;
    border-radius: 19px;
    margin-right: 20px;
    box-sizing: border-box;
    &.writing{
        background: #ea6f5a;
        color: #fff;
    }
`