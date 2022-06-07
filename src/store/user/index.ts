import { store } from '@/store'
import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'
import { encryptBase64 } from '@/utils/encrypt'
import { createStorage, storage } from '@/utils/Storage'
import { defineStore } from 'pinia'

const Storage = createStorage({ storage: localStorage })

// 用户登录参数
export interface UserLoginParams {
  username: string
  password: string
}

// 用户信息
export interface IUserState {
  token: string
  username: string
  roleName: string
  avatar: string
  permissions: any[]
  info: any
}

// 定义用户状态管理
const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    token: Storage.get(ACCESS_TOKEN, ''),
    username: '',
    avatar: '',
    roleName: '',
    permissions: [],
    info: Storage.get(CURRENT_USER, {}),
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getUserInfo(): object {
      return this.info
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(info: any) {
      this.info = info
      storage.set(CURRENT_USER, info)
    },

    /**
     * 登录
     * 调用登录接口，保存返回的 token 到 store
     */
    async login(params: UserLoginParams) {
      try {
        const info = encryptBase64(JSON.stringify(params))
        console.log(info)
        // const result = await login({ info })
        // const { token } = result.data.data
        // if (token) {
        //   const ex = 7 * 24 * 60 * 60 * 1000
        //   storage.set(ACCESS_TOKEN, token, ex)
        //   this.setToken(token)

        //   await this.getInfo()

        //   return Promise.resolve(result)
        // }
      } catch (e) {
        return Promise.reject(e)
      }
      return null
    },

    // 获取用户信息，保存到Store
    getInfo() {},

    // 退出登录
    async logout() {
      this.setToken('')
      this.setUserInfo('')
      storage.remove(ACCESS_TOKEN)
      storage.remove(CURRENT_USER)
    },
  },
})

export default useUserStore

export function useUserStoreWidthOut() {
  return useUserStore(store)
}
