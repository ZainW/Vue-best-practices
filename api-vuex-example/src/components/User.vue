<template>
  <div>
    <p
      v-for="(info, index) in user"
      :key="index">{{ info }}</p>
    <ao-button
      primary
      @click.native="getUser"> hit api again </ao-button>
    <ao-button
      destructive
      @click.native="clearUser"> clear user </ao-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('users', ['user'])
  },

  beforeRouteLeave (to, from, next) {
    this.clearUser()
    next()
  },

  created () {
    this.fetchUser('1')
  },

  methods: {
    ...mapActions('users', ['fetchUser', 'clearUser']),

    getUser () {
      let random = Math.floor(Math.random() * (10) + 1)
      this.fetchUser(`${random}`)
    }
  }
}
</script>

<style>

</style>
