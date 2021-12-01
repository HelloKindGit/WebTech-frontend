import axios from 'axios'

const RECIPE_API_BASE_URL = 'http://localhost:8080/api/rezepte/all'

class RezeptService {
  getRezepte () {
    return axios.get(RECIPE_API_BASE_URL)
  }
}

export default new RezeptService()
