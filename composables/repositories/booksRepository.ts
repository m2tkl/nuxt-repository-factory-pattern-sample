import { NuxtAxiosInstance } from '@nuxtjs/axios'

const resource = '/books'

export const BooksRepository = ($axios: NuxtAxiosInstance) => ({
  get() {
    return $axios.get(`${resource}`)
  }
})
