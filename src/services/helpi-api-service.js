import axios from 'axios'

class HelpiApiService {
    http = null

    constructor() {
        this.http = axios.create({
            baseURL: `https://help-i-api.azurewebsites.net/api`,
            headers: {
                'accept': 'application/json'
            }
        })
    }

    getGamesApi(){
        return this.http.get(`/games`)
    }

    getGamesBy(gameId){
        return this.http.get(`/games/${gameId}`)
    }

    getExpertsByGameId(gameId){
        return this.http.get(`/games/${gameId}/experts`)
    }

    getTrainingMaterialById(materialId){
        return this.http.get(`/trainings/${materialId}`)
    }

    getTrainingMaterialGameId(gameId){
        return this.http.get(`/games/${gameId}/trainings`)
    }

    getProfileByPlayer(playerId){
        return this.http.get(`/players/${playerId}`)
    }

    postExpertApplication(application, playerId){
        return this.http.post(`/players/${playerId}/applications`, {
            gameId: application.gameId,
            description: application.description,
            videoApplication: application.videoApplication
        })
    }

    getApplicationsByPlayerId(playerId){
        return this.http.get(`/players/${playerId}/applications`)
    }

    getTrainingMaterialsByPlayerId(playerId){
        return this.http.get(`/players/${playerId}/trainings`)
    }

    postPlayerTrainingMaterial(playerId, trainingMaterialId){
        return this.http.post(`/players/${playerId}/trainings/${trainingMaterialId}`)
    }

    getExpertsByExpertId(expertId){
        return this.http.get(`/experts/${expertId}`)
    }

}

export default new HelpiApiService();