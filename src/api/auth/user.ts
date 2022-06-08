import Axios from '@/utils/http/axios'

/**
 * 用户登录
 * @param {info}params
 * @returns
 */
export function login(params: { info: string }): Promise<any> {
  return Axios.request({ url: '/api/auth/user/login', method: 'POST', params })
}

export const getUserInfo = () => {
  return Axios.request({ url: '/api/auth/user/info', method: 'POST' })
}
