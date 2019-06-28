import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

// const chageDetail = (title,content) => ({
//   type: constants.CHANGE_DETAIL,
//   title,
//   content
// })

// export const getDetail = (id) => {
//   return (dispatch) => {
//     axios.get('/api/detail.json?id=' + id).then((res) => {
//       const result = res.data.data;
//       const action = chageDetail(result.title,result.content)
//       dispatch(action);
//     })
//   }
// }

