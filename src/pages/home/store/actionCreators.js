import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const chageHomeData = (result) => ({
  type: constants.CHANGE_HOME_TYPE,
  topicList: result.topicList,
  articleList: result.articleList,
  recommondList: result.recommondList,
  writerList: result.writerList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = chageHomeData(result)
      dispatch(action);
    })
  }
}


export const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5)
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data.data.writerList
      dispatch(changeList(data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const data = res.data.data
      dispatch(addHomeList(data,page + 1))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})