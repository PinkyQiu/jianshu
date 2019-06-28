import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS ({
  topicList: [],
  articleList: [],
  recommondList: [],
  writerList:[],
  list:[],
  page: 1,
  totalPage: 1,
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state,action) => {
  return state.merge({
    topList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommondList: fromJS(action.recommondList),
    writerList: fromJS(action.writerList)
  })
}

const addArticleList = (state,action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage':action.nextPage
  })
}

export default (state = defaultState,action) => {
  switch(action.type) {
    case constants.CHANGE_LIST:
      return state.merge({
        writerList: action.data,
        totalPage: action.totalPage
      })
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    case constants.CHANGE_HOME_TYPE:
      return changeHomeData(state,action)
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state,action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show)
    default:
      return state;
  }
}