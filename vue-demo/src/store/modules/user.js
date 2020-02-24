import api from '@/api/user'

const user = {
  namespaced: true,
  state: {
    token: '',
    name: '',
  },
  getters: {
    token: state => state.user.token,
    name: state => state.user.name,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },

  actions: {
    // 获取用户信息
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        api.getUserInfo().then(res => {
          // console.log(res)
          if (res.code === 200) {
            commit('SET_NAME', res.data.name)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //
    // // 登出
    // LogOut ({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        resolve()
      })
    }
  }
}

export default user
