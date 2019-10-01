<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div v-for="post in posts" :key="post.id">
      <h1>id: {{ post.id }}</h1>
      <p>title: {{ post.title }}</p>
      <p>body: <span v-html="post.body"></span></p>
      <p>publishedAt: {{ post.publishedAt }} </p>
    </div>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
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
