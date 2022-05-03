<template>
  <v-container>
    <v-card>

      <v-row>
        <v-col>
          <v-card-title>{{expert.expertProfile.gameUserName}}</v-card-title>
          <v-card-subtitle>ELO: {{expert.expertProfile.elo}}</v-card-subtitle>
          <v-card-text>Why me: {{expert.expertProfile.whyMe}}</v-card-text>
          <v-card-text>Experience: {{expert.expertProfile.experienceStory}}</v-card-text>
        </v-col>
        <v-col>
          <v-img class="expert-profile" :src="expert.personalProfile.profilePictureUrl"></v-img>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>

<script>
import HelpiApiService from "@/services/helpi-api-service";

export default {
  name: "expert",
  data() {
    return {
      expert: {

        gameId: '',
        expertProfile: {
          elo: '',
          gameUserName: '',
          experienceStory: '',
          whyMe: '',
          startedPlaying: ''
        },

        id: 0,
        email: '',

        personalProfile: {
          "firstName": '',
          "lastName": '',
          "birthdate": '',
          "profilePictureUrl": ''
        },

      }
    }
  },

  methods: {
    retrieveExpert(id) {
      HelpiApiService.getExpertsByExpertId(id)
          .then((response) => {
            this.expert = response.data;
          })
          .catch(e => {
            console.log(e);
          })
    },

  },

  created() {
    this.retrieveExpert(this.$route.params.expertId);
  }
}
</script>

<style scoped>
.expert-profile{
  height: auto;
  width: 700px;
}
</style>