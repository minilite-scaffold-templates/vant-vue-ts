import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

const menus = () => {
  const result: any[] = [
    {
      icon: 'flower-o',
      lable: '诚实',
      color: 'green',
    },
    {
      icon: 'flag-o',
      lable: '友善',
      color: 'green',
    },
    {
      icon: 'brush-o',
      lable: '爱国',
      color: 'green',
    },
    {
      icon: 'orders-o',
      lable: '富强',
      color: 'green',
    },
    {
      icon: 'bulb-o',
      lable: '敬业',
      color: 'green',
    },
    {
      icon: 'apps-o',
      lable: '和谐',
      color: 'green',
    },
    {
      icon: 'home-o',
      lable: '民主',
      color: 'green',
    },
    {
      icon: 'tv-o',
      lable: '公平',
      color: 'green',
    },
    {
      icon: 'refund-o',
      lable: '正义',
      color: 'green',
    },
  ]

  return result
}

export default [
  {
    url: '/fication/menus',
    timeout: 1000,
    method: 'post',
    response: () => {
      const list = menus()
      return resultSuccess({
        list,
      })
    },
  },
] as MockMethod[]
