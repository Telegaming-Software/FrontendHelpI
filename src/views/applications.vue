<template>
 <v-container>
   <section style="text-align: center">
     <h2>My applications</h2>
   </section>

   <v-card v-for="application in applications" :key="application.id">
     <v-img :src="application.videoApplication"></v-img>
     <v-card-title style="color: #139028">Status: {{application.status}}</v-card-title>
     <v-card-text>{{application.description}}</v-card-text>
     <v-card-text>Video enviado: {{application.videoApplication}}</v-card-text>
   </v-card>

 </v-container>
</template>

<script>
import HelpiApiService from '../services/helpi-api-service';
export default {
  name: "applications",
  data() {
    return {
      applications: []
    }
  },

  methods: {
    retrieveApplications(id){
      HelpiApiService.getApplicationsByPlayerId(id)
          .then(response => {
            this.applications = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
    }
  },

  created() {
    this.retrieveApplications(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>