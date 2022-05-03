<template>
  <v-container>

    <section style="text-align: center">
      <h2>Presenting our experts for {{game.name}}</h2>
    </section>

    <section class="experts">
      <div class="container">
        <article v-for="expert in experts" :key="expert.id">
          <img @click="navigateToExpert(expert.id)" :src="expert.personalProfile.profilePictureUrl">
          <h4 style="text-align: center">{{expert.expertProfile.gameUserName}}</h4>
        </article>
      </div>
    </section>

  </v-container>
</template>

<script>
import HelpiApiService from '../services/helpi-api-service';
export default {
  name: "experts",

  data() {
    return {

      game: {
        id: 0,
        name: '',
        summary: '',
        coverUrl: ''
      },

      experts: [],

      trainingMaterials: []

    }
  },

  methods: {
    retrieveGame(id) {
      HelpiApiService.getGamesBy(id)
          .then((response) => {
            this.game = response.data.resource;
          })
          .catch(e => {
            console.log(e);
          })
    },
    retrieveExperts(id) {
      HelpiApiService.getExpertsByGameId(id)
          .then((response) => {
            this.experts = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
    },

    navigateToExpert(expertId){
      this.$router.push({name: 'expert', params: { id: this.$route.params.id, expertId: expertId}});
    }

  },

  created() {
    this.retrieveGame(this.$route.params.id);
    this.retrieveExperts(this.$route.params.id);
  }

}
</script>

<style scoped>
.container{
  width: 98%;
  margin: auto;
}

section{
  width: 100%;
  margin-bottom: 25px;
}

.banner img{
  width: 100%;
  height: 500px;
  filter: brightness(0.4);
}

.banner .container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #FFFFFF;
}

.banner h2 {
  font-size: 28px;
}

.experts .container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.experts article{
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 15px;
}

.experts img{
  width: 250px;
  height: 250px;
  border-radius: 300px;
}

.experts img:hover{
  transform: translateY(-10px);
}

.training .container{
  display: flex;
  align-items: center;
  border-radius: .8rem;
  justify-content: center;

}

@media screen and (max-width: 868px) {
  .training .container{
    flex-direction: column;
  }

}
</style>