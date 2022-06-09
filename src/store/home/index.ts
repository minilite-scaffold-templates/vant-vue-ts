import { store } from '@/store'
import { defineStore } from 'pinia'
import { getRotaImages } from '@/api/home/imagesList'
import { getInformationList } from '@/api/home/informationList'
import { getFicationMenus } from '@/api/home/menus'

export interface HomeState {
  rotationImages: any
  ficationList: any
  imformationList: any
}

export const useHomeStore = defineStore({
  id: 'app-home',
  state: (): HomeState => ({
    rotationImages: [],
    ficationList: [],
    imformationList: [],
  }),
  getters: {},
  actions: {
    setRotationImages(rotationImages: any) {
      this.rotationImages = [].concat(rotationImages)
    },
    setFicationList(ficationList: any) {
      this.ficationList = [].concat(ficationList)
    },
    setImformationList(imformationList: any) {
      this.imformationList = [].concat(imformationList)
    },
    // 查询轮播图图片数据
    async selRotationImages() {
      try {
        const response = await getRotaImages()
        const { list = [] } = response
        this.setRotationImages(list)

        return Promise.resolve(response)
      } catch (e) {
        return Promise.reject(e)
      }
    },

    // 获取资讯数据
    async getInformationData() {
      try {
        const response = await getInformationList()
        const { list = [] } = response
        this.setImformationList(list)

        return Promise.resolve(response)
      } catch (e) {
        return Promise.reject(e)
      }
    },

    // 获取功能数据
    async getFicationMenusData() {
      try {
        const response = await getFicationMenus()
        const { list = [] } = response
        this.setFicationList(list)

        return Promise.resolve(response)
      } catch (e) {
        return Promise.reject(e)
      }
    },
  },
})

// Need to be used outside the setup
export function useHomeStoreWidthOut() {
  return useHomeStore(store)
}
