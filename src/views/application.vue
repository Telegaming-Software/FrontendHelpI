<template>
  <v-container>
    <v-card>
      <v-card-title>Application Form</v-card-title>
      <v-form @submit.prevent="sendApplication" v-model="isValid">
        <v-card-text>
          <v-text-field label="Description" v-model="application.description" required></v-text-field>
          <v-text-field label="Selected Game" v-model="application.gameId" required></v-text-field>
          <v-text-field label="Video Application" v-model="application.videoApplication" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn app dark color="#139028" type="submit">Send</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import Application from "@/models/application";
import HelpiApiService from '../services/helpi-api-service';

export default {
  name: "Application",
  data() {
    return {
      application: new Application('', '', '', '', ''),
      submitted: false,
      successful: false,
      message: '',
      isValid: true
    }
  },

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    }
  },

  methods: {

    navigateToApplications(){
      this.$router.push({name: 'applications', params: { id: this.currentUser.id}});
    },

    sendApplication(){
      HelpiApiService.postExpertApplication(this.application, this.currentUser.id)
      console.log(this.application)
      this.navigateToApplications()
    }

  }
}
</script>

<style scoped>

</style>