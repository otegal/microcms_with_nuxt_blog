import axios from 'axios'

export const state = {
  posts: []
}

export const getters = {
  posts: (state) => state.posts
}

export const mutations = {
  setPosts (state, { posts }) {
    state.posts = posts
  }
}

export const actions = {
  fetchPosts ({ commit }) {
    axios.get('https://hhcompose.microcms.io/api/v1/posts', {
      headers: {"X-API-KEY": process.env.MICRO_CMS_X_API_KEY }
    })
    .then((response) => {
      commit('setPosts', { posts: response.data.contents })
    })
  }
}