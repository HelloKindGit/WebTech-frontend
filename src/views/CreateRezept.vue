<template>
  <form class="upload">
    <div class="form-row">
      <h1 class="upload__heading">Rezept</h1>
      <div class="form-group">
        <label class="form-label" for="inputName">Name:</label>
        <input v-model="name" type="text" class="form-control" id="inputName">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputBeschreibung">Beschreibung:</label>
        <input v-model="beschreibung" type="text" class="form-control" id="inputBeschreibung" aria-owns="10">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputVorzeit">Vorbereitungszeit:</label>
        <input v-model="vorbereitungsZeit" type="number" class="form-control" id="inputVorzeit">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputKochzeit">Kochzeit:</label>
        <input v-model="kochZeit" type="number" class="form-control" id="inputKochzeit">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputPortionen">Portionen:</label>
        <input v-model="portionen" type="number" class="form-control" id="inputPortionen">
      </div>
    </div>
    <button type="button" class="btn upload__btn" @click="submitRezept">
      <span>Upload Rezept</span>
    </button>
  </form>
  <form class="upload2">
    <div class="form-row">
      <h2 class="upload__heading">Zutat</h2>
      <h6>(erst Rezept hinzufügen)</h6>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Name und Menge</span>
        </div>
        <input v-model="zutatName" type="text" class="form-control" placeholder="Name">
        <input v-model="menge" type="number" class="form-control" placeholder="Menge in Gramm">
      </div>
    </div>
    <button type="button" class="btn upload__btn" @click="addZutat">
      <span>Zutat hinzufügen</span>
    </button>
  </form>
</template>

<script>
export default {
  name: 'createRezept',
  data () {
    return {
      id: {},
      name: '',
      beschreibung: '',
      vorbereitungsZeit: null,
      kochZeit: null,
      portionen: null,
      zutatName: '',
      menge: null
    }
  },
  methods: {
    submitRezept () {
      const recipe = {
        name: this.name,
        beschreibung: this.beschreibung,
        vorbereitungsZeit: this.vorbereitungsZeit,
        kochZeit: this.kochZeit,
        portionen: this.portionen
      }
      console.log(recipe)
      const endpoint = 'https://webtech-anwendung.herokuapp.com/api/rezepte/'
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const rezept = JSON.stringify(recipe)
      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: rezept,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        // eslint-disable-next-line no-return-assign
        .then(response => this.id = response.id)
        .catch(error => console.log('error', error))
    },
    addZutat () {
      const ingredient = {
        name: this.name,
        menge: this.menge
      }
      const endpoint = 'https://webtech-anwendung.herokuapp.com/api/rezepte/' + this.id + 'zutaten'
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const zutat = JSON.stringify(ingredient)
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: zutat,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 0.5rem;
}

.form-label {
  font-family: Arial,serif;
  font-size: x-large;
}

.input-group-text {
  font-size: larger;
}

button {
  grid-column: 1 / span 2;
  justify-self: center;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  border: 2px solid black;
}
.btn {
  grid-column: 1 / -1;
  justify-self: center;
  color: darkred;
  font-size: x-large;
}

.upload,
.upload2 {
  background-color: antiquewhite;
}
</style>
