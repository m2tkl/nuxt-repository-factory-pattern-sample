import { Inject, NuxtApp } from '@nuxt/types/app'

import {
  apiRepositoryFactory,
  Repositories
} from '@/composables/factories/apiRepositoryFactory'

export default ({ app }: { app: NuxtApp }, inject: Inject) => {
  const repositories = (name: keyof Repositories) => {
    return apiRepositoryFactory.get(name)(app.$axios)
  }

  inject('repositories', repositories)
}
