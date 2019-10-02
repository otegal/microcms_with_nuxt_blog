<template>
<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="align-end fill-height">{{ post.title }}</v-card-title>
    </v-img>

    <v-card-text>
      <span>{{ post.publishedAt | jstDateTime }}</span><br>
      <span class="text--primary">
        <span>なんかかく</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment-timezone'

export default {
  props: [
    'post'
  ],
  filters: {
    jstDateTime (date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>