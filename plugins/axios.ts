import { NuxtApp } from '@nuxt/types/app'

const baseUrl = 'http://localhost:3001'

export default ({ app }: { app: NuxtApp }) => {
  app.$axios.setBaseURL(baseUrl)

  app.$axios.onRequest((config) => {
    console.log(config)
  })

  app.$axios.onResponse((config) => {
    console.log(config)
  })

  app.$axios.onError((e) => {
    console.log(e.response)
  })
}
