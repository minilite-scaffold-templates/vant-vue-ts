import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

const images = () => {
  const result: any[] = [
    'https://img1.baidu.com/it/u=571170819,3603043975&fm=253&fmt=auto&app=138&f=PNG?w=900&h=500',
    'https://img0.baidu.com/it/u=3892965325,1939821156&fm=253&fmt=auto&app=138&f=PNG?w=500&h=281',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13781257428%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657266304&t=dab532199de6ee84781ef014cbb4d94a',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fneuro.drvoice.cn%2Fuploadfile%2F2021%2F02%2F15%2F1613390550936245.png&refer=http%3A%2F%2Fneuro.drvoice.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657266304&t=4efe94cbbd8ee1299864d12d75d90a64',
  ]

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
