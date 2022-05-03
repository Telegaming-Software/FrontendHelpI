<template>
  <v-app>
    <navigation-bar></navigation-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>

import NavigationBar from "@/components/navigation-bar";
export default {
  name: 'App',

  components: {
    NavigationBar
  },
};

</script>

<style scoped>


</style>