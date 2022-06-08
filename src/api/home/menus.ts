import Axios from '@/utils/http/axios'

export const getFicationMenus = () => {
  return Axios.request({
    url: '/fication/menus',
    method: 'POST',
  })
}
