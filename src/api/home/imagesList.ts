import Axios from '@/utils/http/axios'

export const getRotaImages = () => {
  return Axios.request({
    url: '/rota/images',
    method: 'POST',
  })
}
