import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS ({
  topicList: [{
      id: 1,
      title: '社会热点',
      imageUrl: '//upload-images.jianshu.io/upload_images/15426305-0f7ef6eb7d2624bd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '社会热点',
      imageUrl: '//upload-images.jianshu.io/upload_images/15426305-0f7ef6eb7d2624bd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  articleList: [{
      id: 1,
      title: '☁两年大学，这几件事正改变着我的青春。🍃',
      imageUrl: '//upload-images.jianshu.io/upload_images/15426305-0f7ef6eb7d2624bd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      desc:'判断一个人有没有赚钱能力，先看这4条，四条全占的人早晚会成功 年轻人的压力很大，35岁之后很难见到职场人的身影，职场人忙忙碌碌，当到年底总结的时...'
    },
    {
      id: 2,
      title: '☁两年大学，这几件事正改变着我的青春。🍃',
      imageUrl: '//upload-images.jianshu.io/upload_images/15426305-0f7ef6eb7d2624bd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      desc:'判断一个人有没有赚钱能力，先看这4条，四条全占的人早晚会成功 年轻人的压力很大，35岁之后很难见到职场人的身影，职场人忙忙碌碌，当到年底总结的时...'
    },
    {
      id: 3,
      title: '☁两年大学，这几件事正改变着我的青春。🍃',
      imageUrl: '//upload-images.jianshu.io/upload_images/15426305-0f7ef6eb7d2624bd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      desc:'判断一个人有没有赚钱能力，先看这4条，四条全占的人早晚会成功 年轻人的压力很大，35岁之后很难见到职场人的身影，职场人忙忙碌碌，当到年底总结的时...'
    },
    {
      id: 4,
      title: '☁两年大学，这几件事正改变着我的青春。🍃',
      imageUrl: '//upload-images.jianshu.io/upload_images/15426305-0f7ef6eb7d2624bd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      desc:'判断一个人有没有赚钱能力，先看这4条，四条全占的人早晚会成功 年轻人的压力很大，35岁之后很难见到职场人的身影，职场人忙忙碌碌，当到年底总结的时...'
    }
  ],
  recommondList: [
    {
      id: '1',
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    },
    {
      id: '2',
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    },
    {
      id: '3',
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    },
    {
      id: '4',
      imageUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
    }
  ],
  list:[],
  page: 1,
  totalPage: 1
});
export default (state = defaultState,action) => {
  if(action.type === constants.CHANGE_LIST) {
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
  }
  if(action.type === constants.CHANGE_PAGE) {
    return state.set('page', action.page);
  }
  return state;
}