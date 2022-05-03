<template>
  <div class="container">
    <v-row class="row">

      <v-col class="col">
        <h1>HelpI</h1>
        <p>Choose your game</p>
        <button @click="navigateToRegister" type="button">Register now</button>
      </v-col>

      <v-col class="col">
        <v-row>
          <v-col class="flex-column" v-for="game in games" :key="game.id" cols="6">
            <v-card @click="navigateToGameMenu(game.id)" class="card">
              <v-img :src="game.coverUrl">
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </div>
</template>

<script>
import HelpiApiService from '../services/helpi-api-service';
export default {
  name: "games",

  data() {
    return {
      games: [],
      errors: [],
      helpiApi: HelpiApiService
    }
  },
  mounted() {
    this.getGames();
  },

  methods: {
    navigateToGameMenu(id){
      this.$router.push({name: 'game', params: { id: id}});
    },

    navigateToRegister(){
      this.$router.push({name: 'register'});
    },

    getGames(){
      this.helpiApi.getGamesApi()
      .then(response => {
        this.games = response.data;
      })
      .catch((e) => {
        console.log(e);
      })
    },
  }

};

</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}

.container{
  width: 100%;
  height: 100vh;
  padding-left: 8%;
  padding-right: 8%;
  box-sizing: border-box;
}

.row{
  align-items: center;
}

.col{

}

h1{
  color: #139028;
  font-size: 32px;
}

@media screen and (min-width: 700px) {
  h1{
    font-size: 70px;
  }
}

p{
  color: #139028;
  font-size: 15px;
  line-height: 1;
}

@media screen and (min-width: 700px) {
  p{
    font-size: 40px;
  }
}

button{
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  background-color:#666173;
  text-align:center;
  transition: all 0.2s;
}

.card{
  max-width: 300px;
  height: auto;
  display: flex;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 30px 25px;
  transition: transform 0.5s;
}

.card:hover{
  transform: translateY(-10px);
}

</style>