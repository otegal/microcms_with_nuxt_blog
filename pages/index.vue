<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div v-for="content in contents" :key="content.id">
      <p>title: {{ content.title }}</p>
      <p>body: <span v-html="content.body"></span></p>
      <p>publishedAt: {{ content.publishedAt }} </p>
    </div>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    let { data } = await axios.get('https://hhcompose.microcms.io/api/v1/posts', {
      headers: {"X-API-KEY": process.env.MICRO_CMS_X_API_KEY }
    })
    console.log(data)
    return { contents: data.contents }
  }
}
</script>
