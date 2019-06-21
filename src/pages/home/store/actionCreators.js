import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) => ({
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
    axios.get('/api/writerList.json').then((res) => {
      console.log(1)
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}