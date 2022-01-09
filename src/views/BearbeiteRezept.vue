<template>
  <div class="container">
  <form class="upload">
    <div class="form-row">
      <h1 class="upload__heading">Rezept Bearbeiten</h1>
      <div class="form-group">
        <label class="form-label" for="inputName">Name:</label>
        <input v-model="name" type="text" class="form-control" :placeholder=rezept.name id="inputName">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputBeschreibung">Beschreibung:</label>
        <input v-model="beschreibung" type="text" class="form-control" :placeholder=rezept.beschreibung id="inputBeschreibung">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputVorzeit">Vorbereitungszeit:</label>
        <input v-model="vorbereitungsZeit" type="number" class="form-control" :placeholder=rezept.vorbereitungsZeit id="inputVorzeit">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputKochzeit">Kochzeit:</label>
        <input v-model="kochZeit" type="number" class="form-control" :placeholder=rezept.kochZeit id="inputKochzeit">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputPortionen">Portionen:</label>
        <input v-model="portionen" type="number" class="form-control" :placeholder=rezept.portionen id="inputPortionen">
      </div>
      <div class="form-group">
        <label class="form-label" for="inputKategorie">Kategorie:</label>
        <input v-model="kategorie" type="text" class="form-control" :placeholder=rezept.kategorie id="inputKategorie">
      </div>
    </div>
    <button type="button" class="btn upload__btn" @click="changeRezept">
      <span>Upload Rezept</span>
    </button>
  </form>
  <form class="needs-validation">
    <div class="form-row">
      <h2 class="upload__heading">Zutat Bearbeiten</h2>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Name und Menge</span>
        </div>
        <input v-model="zutatName" type="text" class="form-control" placeholder="Name,Maßeinheit" required>
        <input v-model="menge" type="number" class="form-control" required>
      </div>
    </div>
    <button type="button" class="btn upload__btn" @click="addZutat">
      <span>Zutat hinzufügen</span>
    </button>
    <button type="button" class="btn upload__btn" @click="changeZutat">
      <span>Zutat ändern</span>
    </button>
    <button type="button" class="btn upload__btn" @click="deleteZutat">
      <span>Zutat löschen</span>
    </button>
  </form>
  </div>
</template>

<script>
import { BACKEND_BASE_URL } from '@/urlconstants'

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
  name: 'BearbeiteRezept',
  data () {
    return {
      rezept: {},
      rezeptID: {},
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
    changeRezept () {
      const rezept = JSON.stringify({
        name: this.name,
        beschreibung: this.beschreibung,
        vorbereitungsZeit: this.vorbereitungsZeit,
        kochZeit: this.kochZeit,
        portionen: this.portionen,
        kategorie: this.kategorie
      })
      const endpoint = BACKEND_BASE_URL + this.rezeptID
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      const requestOptions = {
        method: 'PUT',
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
    },
    addZutat () {
      if (!this.zutatName || !this.menge) return
      const ingredient = {
        name: this.zutatName,
        menge: this.menge
      }
      const endpoint = BACKEND_BASE_URL + this.rezeptID + '/zutaten'
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const zutat = JSON.stringify(ingredient)
      console.log(zutat)
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: zutat,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => {
          this.zutatName = ''
          this.menge = null
        })
        .catch(error => console.log('error', error))
    },
    changeZutat () {
      let zutatID
      this.rezept.zutaten.forEach(zutat => {
        if (zutat.name.toLowerCase().split(',')[0] === this.zutatName.toLowerCase().split(',')[0]) {
          zutatID = zutat.id
        }
      })
      const zutat = JSON.stringify({
        name: this.zutatName,
        menge: this.menge
      })
      const endpoint = BACKEND_BASE_URL + this.rezeptID + '/zutaten/' + zutatID
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: zutat,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => {
          this.zutatName = ''
          this.menge = null
        })
        .catch(error => console.log('error', error))
    },
    deleteZutat () {
      let zutatID
      this.rezept.zutaten.forEach(zutat => {
        if (zutat.name.toLowerCase().split(',')[0] === this.zutatName.toLowerCase().split(',')[0]) {
          zutatID = zutat.id
        }
      })
      const endpoint = BACKEND_BASE_URL + this.rezeptID + '/zutaten/' + zutatID
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => {
          this.rezept.zutaten = this.rezept.zutaten.filter(zutat => zutat.id !== zutatID)
          this.zutatName = ''
          this.menge = null
        })
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    this.rezeptID = this.$route.params.id
    const endpoint = BACKEND_BASE_URL + this.rezeptID
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        this.rezept = JSON.parse(JSON.stringify(res))
        return this.rezept
      })
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>
.upload__heading {
  font-weight: 700;
  font-size: 3.25rem;
  text-transform: uppercase;
}

.form-group {
  margin-bottom: 0.5rem;
}

.form-label {
  font-family: Arial,serif;
}

.input-group-text {
  font-size: larger;
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

.upload {
  background-color: aliceblue;
  border: 2px solid black;
  margin-top: 2.5rem;
}
.needs-validation {
  background-color: aliceblue;
  border: 2px solid black;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
}
</style>
