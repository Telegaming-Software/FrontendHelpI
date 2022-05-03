<template>
  <v-container>

    <section class="banner">
      <img alt="Banner" :src="game.backgroundImageUrl">
      <div class="container">
        <h1>{{game.name}}</h1>
        <button class="option-button" @click="navigateToExperts()"> Find your expert </button>
        <button class="option-button" @click="navigateToMaterials()"> Basic training </button>
        <button class="option-button" @click="navigateToMaterials()"> Advanced training </button>
      </div>
    </section>

    <section style="text-align: center">
      <h2>Welcome to {{game.name}} menu</h2>
      <p>{{game.summary}}</p>
    </section>

    <section class="experts">
      <h3>FAVORITE EXPERTS</h3>
      <div class="container">
        <article v-for="expert in experts.slice(0,3)" :key="expert.id">
          <img @click="navigateToExpert(expert.id)" :src="expert.personalProfile.profilePictureUrl">
          <h4 style="text-align: center">{{expert.expertProfile.gameUserName}}</h4>
        </article>
      </div>
    </section>

    <section class="training" >
      <h3>FAVORITE TRAINING MATERIALS</h3>
      <div class="container" style="background-color: #666173; margin: 30px" v-for="trainingMaterial in trainingMaterials.slice(0,2)" :key="trainingMaterial.id">
        <article>
          <img class="item-image" :src="trainingMaterial.videoUri">
        </article>
        <article style="text-align: right; color: #FFFFFF">
          <h3>{{trainingMaterial.trainingMaterialId}}</h3>
          <h5> Fecha de publicacion: {{ trainingMaterial.publishedDate }}
          Precio: {{trainingMaterial.price}} {{trainingMaterial.currency}}</h5>
          <p>{{trainingMaterial.description}}</p>
          <button @click="purchaseTrainingMaterial(trainingMaterial.id)" class="option-button"> Buy now </button>
        </article>
      </div>
    </section>

  </v-container>
</template>

<script>
import HelpiApiService from '../services/helpi-api-service';
export default {

  name: "game-menu",

  data() {
    return {

      game: {
        id: 0,
        name: '',
        summary: '',
        coverUrl: '',
        backgroundImageUrl: ''
      },

      experts: [],

      trainingMaterials: []

    }
  },

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    }
  },

  methods: {
    retrieveGame(id) {
      HelpiApiService.getGamesBy(id)
      .then((response) =>{
        this.game = response.data.resource;
      })
      .catch(e => {
        console.log(e);
      })
    },
    retrieveExperts(id){
      HelpiApiService.getExpertsByGameId(id)
      .then((response) =>{
        this.experts = response.data;
      })
      .catch((e) => {
        console.log(e);
      })
    },

    retrieveTrainingMaterial(id){
      HelpiApiService.getTrainingMaterialGameId(id)
          .then((response) =>{
            this.trainingMaterials = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
    },

    navigateToExperts(){
      this.$router.push({name: 'experts'});
    },

    navigateToMaterials(){
      this.$router.push({name: 'materials'});
    },

    navigateToProfileMaterials(){
      this.$router.push({name: 'material', params: { id: this.currentUser.id}});
    },

    navigateToExpert(expertId){
      this.$router.push({name: 'expert', params: { id: this.$route.params.id, expertId: expertId}});
    },

    purchaseTrainingMaterial(trainingId){
      HelpiApiService.postPlayerTrainingMaterial(this.currentUser.id, trainingId)
      this.navigateToProfileMaterials()
    }

  },

  created() {
    this.retrieveGame(this.$route.params.id);
    this.retrieveExperts(this.$route.params.id);
    this.retrieveTrainingMaterial(this.$route.params.id);
  }

};

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

.banner{
  margin-top: 50px;
  position: relative;
  text-align: center;
}

.banner img{
  width: 100%;
  height: 500px;
  filter: blur(4px) brightness(0.4);
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

.option-button{
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  color:#FFFFFF;
  background-color:#139028;
  text-align:center;
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


.item-image{
  width: 100%;
  height: 100%;
  position: relative;
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