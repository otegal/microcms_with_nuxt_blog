<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div v-for="post in posts" :key="post.id">
    <postDetail :post="post"/>
    </div>
  </v-layout>
</template>

<script>
import axios from 'axios'
import postDetail from '@/components/postDetail'

export default {
  components: {
    postDetail
  },
  async asyncData ({store}) {
    if (store.getters['posts'].length) {
      return
    }
    await store.dispatch('fetchPosts')
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
