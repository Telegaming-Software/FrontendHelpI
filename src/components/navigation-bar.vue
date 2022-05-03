<template>
  <v-app-bar app dark color=#666173>
    <v-toolbar-title>HelpI</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/">home</v-btn>
      <v-btn text to="/about">about</v-btn>
      <v-btn text to="/register" v-if="!currentUser">Sign Up</v-btn>
      <v-btn text to="/login" v-if="!currentUser">Sign In</v-btn>
      <v-btn text to="/profile" v-if="currentUser">{{ currentUser.firstName}}</v-btn>
      <v-btn text @click.prevent="logout" v-if="currentUser">Sign Out</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "navigation-bar",

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }

}
</script>

<style scoped>

</style>