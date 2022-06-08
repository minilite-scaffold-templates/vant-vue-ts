import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

const news = () => {
  const result: any[] = [
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Fbmiddle%2F006APoFYly1g0b8zul476j30gs0g4afi.jpg&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657269044&t=7642e9d26900a1852e1b7dcecc275f05',
      title: '震惊！！小学生居然...',
      content: 'xxxx年xx月xx日,xx小学的..',
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Fbmiddle%2F006APoFYly1g0b8zul476j30gs0g4afi.jpg&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657269044&t=7642e9d26900a1852e1b7dcecc275f05',
      title: '震惊！！国内某位医学突破发展',
      content: 'xxxxxxxxxxxxxxxxxx',
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Fbmiddle%2F006APoFYly1g0b8zul476j30gs0g4afi.jpg&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657269044&t=7642e9d26900a1852e1b7dcecc275f05',
      title: '震惊！！国内某位医学突破发展',
      content: 'xxxxxxxxxxxxxxxxxx',
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Fbmiddle%2F006APoFYly1g0b8zul476j30gs0g4afi.jpg&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657269044&t=7642e9d26900a1852e1b7dcecc275f05',
      title: '震惊！！国内某位医学突破发展',
      content: 'xxxxxxxxxxxxxxxxxx',
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Fbmiddle%2F006APoFYly1g0b8zul476j30gs0g4afi.jpg&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657269044&t=7642e9d26900a1852e1b7dcecc275f05',
      title: '震惊！！国内某位医学突破发展',
      content: 'xxxxxxxxxxxxxxxxxx',
    },
    {
      img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftva1.sinaimg.cn%2Fbmiddle%2F006APoFYly1g0b8zul476j30gs0g4afi.jpg&refer=http%3A%2F%2Ftva1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657269044&t=7642e9d26900a1852e1b7dcecc275f05',
      title: '震惊！！国内某位医学突破发展',
      content: 'xxxxxxxxxxxxxxxxxx',
    },
  ]

  return result
}

export default [
  {
    url: '/information/news',
    timeout: 1000,
    method: 'post',
    response: () => {
      const list = news()
      return resultSuccess({
        list,
      })
    },
  },
] as MockMethod[]
