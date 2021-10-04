<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }}
      </li>
    </ul>

    <h2>Books</h2>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()

    const users = useAsync(async () => {
      const response = await app.$repositories('user').get()
      return response.data
    })

    const books = useAsync(async () => {
      const response = await app.$repositories('books').get()
      return response.data
    })

    return {
      users,
      books,
    }
  },
})
</script>
