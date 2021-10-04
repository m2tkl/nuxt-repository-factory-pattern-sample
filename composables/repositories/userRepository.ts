import { NuxtAxiosInstance } from '@nuxtjs/axios'

const resource = '/user'

export const UserRepository = ($axios: NuxtAxiosInstance) => ({
  get() {
    return $axios.get(`${resource}`)
  }
})
