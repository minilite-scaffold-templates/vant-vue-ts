import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

const images = () => {
  const result: any[] = ['1', '1', '1', '1']

  return result
}

export default [
  {
    url: '/rota/images',
    timeout: 1000,
    method: 'post',
    response: () => {
      const list = images()
      return resultSuccess({
        list,
      })
    },
  },
] as MockMethod[]
