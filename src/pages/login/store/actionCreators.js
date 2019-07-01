import * as constants from './constants'
import axios from 'axios'

const chageLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data;
      if(result) {
        dispatch(chageLogin());
      }else {
        alert('打印失败')
      }
    }).catch(() => {
      console.log('error')
    })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})

