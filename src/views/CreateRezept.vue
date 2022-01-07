<template>
  <div class="container">
  <form class="needs-validation">
    <div class="form-row">
      <h1 class="upload__heading">Rezept</h1>
      <div class="form-group">
        <label class="form-label" for="inputName">Name:</label>
        <input v-model="name" type="text" class="form-control" id="inputName" required>
        <div class="valid-feedback">
          Okay!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="inputBeschreibung">Beschreibung:</label>
        <input v-model="beschreibung" type="text" class="form-control" id="inputBeschreibung" required>
        <div class="valid-feedback">
          Okay!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="inputVorzeit">Vorbereitungszeit:</label>
        <input v-model="vorbereitungsZeit" type="number" class="form-control" id="inputVorzeit" required>
        <div class="invalid-feedback">
          Gib eine Zeit an!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="inputKochzeit">Kochzeit:</label>
        <input v-model="kochZeit" type="number" class="form-control" id="inputKochzeit" required>
        <div class="invalid-feedback">
          Gib eine Zeit an!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="inputPortionen">Portionen:</label>
        <input v-model="portionen" type="number" class="form-control" id="inputPortionen" required>
        <div class="invalid-feedback">
          Gib die Anzahl der Portionen an!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="inputKategorie">Kategorie:</label>
        <input v-model="kategorie" type="text" class="form-control" id="inputKategorie" required>
        <div class="invalid-feedback">
          Gib eine Kategorie an!
        </div>
      </div>
    </div>
    <button type="button" class="btn upload__btn" @click="submitRezept">
      <span>Upload Rezept</span>
    </button>
  </form>
  </div>
</template>

<script>
import { BACKEND_BASE_URL } from '@/config'

(function () {
  'use strict'
  window.addEventListener('load', function () {
    const forms = document.getElementsByClassName('needs-validation')
    // eslint-disable-next-line no-unused-vars
    const validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()
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
      kategorie: '',
      zutatName: '',
      menge: null
    }
  },
  methods: {
    submitRezept () {
      if (!this.name || !this.beschreibung || !this.vorbereitungsZeit || !this.kochZeit || !this.portionen || !this.kategorie) return
      const recipe = {
        name: this.name,
        beschreibung: this.beschreibung,
        vorbereitungsZeit: this.vorbereitungsZeit,
        kochZeit: this.kochZeit,
        portionen: this.portionen,
        kategorie: this.kategorie
      }
      const endpoint = BACKEND_BASE_URL
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const rezept = JSON.stringify(recipe)
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: rezept,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => {
          this.name = this.name = ''
          this.beschreibung = this.beschreibung = ''
          this.vorbereitungsZeit = this.vorbereitungsZeit = null
          this.kochZeit = this.kochZeit = null
          this.portionen = this.portionen = null
          this.kategorie = this.kategorie = null
        })
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.upload__heading {
  position: center;
  font-weight: 700;
  font-size: 3.25rem;
  text-transform: uppercase;
  line-height: 1.95;
  text-align: center;
}

.form-group {
  margin-bottom: 0.5rem;
}

.form-label {
  font-size: x-large;
}

button {
  grid-column: 1 / span 2;
  justify-self: center;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  margin-right: 0.2rem;
  border: 2px solid black;
}
.btn {
  grid-column: 1 / -1;
  justify-self: center;
  color: darkred;
  font-size: x-large;
}

.needs-validation {
  background-color: aliceblue;
  border: 2px solid black;
  margin-top: 4rem;
  padding-bottom: 2rem;
}

</style>
