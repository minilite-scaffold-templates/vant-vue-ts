import Axios from '@/utils/http/axios'

export const getInformationList = () => {
  return Axios.request({
    url: '/information/news',
    method: 'POST',
  })
}
