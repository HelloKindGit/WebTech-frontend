<template>
  <body>
  <div class="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="rezept">
      <h1 class="rezept__titel">
        <span>{{ rezept.name }}</span>
      </h1>
      <h3>
        <span>{{ rezept.kategorie }}</span>
      </h3>
      <div class="rezept__details">
        <div class="rezept__info">
          <span class="rezept__info-text">vorbereitung:</span>
          <svg class="rezept__info-icon">
            <div class="icon"><i class="fa fa-clock-o"></i></div>
          </svg>
          <span class="rezept__info-data">{{ rezept.vorbereitungsZeit }}</span>
          <span class="rezept__info-text">minuten |</span>
        </div>
        <div class="rezept__info">
          <span class="rezept__info-text">kochen:</span>
          <svg class="rezept__info-icon">
            <div class="icon"><i class="fa fa-clock-o"></i></div>
          </svg>
          <span class="rezept__info-data">{{ rezept.kochZeit }}</span>
          <span class="rezept__info-text">minuten |</span>
        </div>
        <div class="rezept__info">
          <svg class="rezept__info-icon">
            <div class="icon"><i class="fa fa-user-circle-o"></i></div>
          </svg>
          <span class="rezept__info-data">{{ rezept.portionen }}</span>
          <span class="rezept__info-text">portionen</span>

          <div class="rezept__info-buttons">
            <button type="button" class="btn btn--decrease-servings" @click="portDec(rezept.portionen)">
              <div class="icon"><i class="fa fa-minus"></i></div>
            </button>
            <button type="button" class="btn btn--increase-servings" @click="portInc(rezept.portionen)">
              <div class="icon"><i class="fa fa-plus"></i></div>
            </button>
          </div>
        </div>
      </div>
      <div class="rezept__zutaten">
        <h1 class="heading--2">Rezept Zutaten</h1>
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Zutat</th>
            <th scope="col">Menge</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="zutat in rezept.zutaten" v-bind:key="zutat.id">
            <td>
              <h3>{{ zutat.name.split(',')[0] }}</h3>
            </td>
            <td>
              <h3>{{ Math.round(zutat.menge) }} {{ zutat.name.split(',')[1] }}</h3>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <h3>Beschreibung</h3>
        <div class="card-body">
          {{ rezept.beschreibung }}
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>

import { BACKEND_BASE_URL } from '@/urlconstants'

export default {
  name: 'RezeptPage',
  data () {
    return {
      rezept: {}
    }
  },
  methods: {
    portDec (portionen) {
      if (portionen <= 1) return
      const newPortion = portionen - 1
      this.rezept.zutaten.forEach(ing => {
        ing.menge = (ing.menge * newPortion) / portionen
      })
      this.rezept.portionen = newPortion
    },
    portInc (portionen) {
      const newPortion = portionen + 1
      this.rezept.zutaten.forEach(ing => {
        ing.menge = (ing.menge * newPortion) / portionen
      })
      this.rezept.portionen = newPortion
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
.rezept__titel {
  position: center;
  font-weight: 700;
  font-size: 3.25rem;
  text-transform: uppercase;
  line-height: 1.95;
  text-align: center;
}

.rezept__details {
  display: flex;
  align-items: center;
  padding: 2rem 2rem 2rem 3.5rem;
}

.rezept__info {
  font-size: 1.65rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
}

.rezept__info-text {
  margin-left: 0.4rem;
}

.rezept__info-icon {
  height: 1rem;
  width: 1rem;
  fill: color-primary;
  margin-right: 1.15rem;
}

.rezept__info-data {
  margin-right: 0.1rem;
  font-weight: 700;
}

.rezept__info-buttons {
  display: flex;
  margin-left: 2rem;
}

.btn {
  margin-right: 0.5rem;
  border: 2px solid black;
}

.rezept__zutaten {
  padding: 5rem 8rem;
  font-size: 1.6rem;
  line-height: 1.4;
  background-color: color-grey-light-2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rezept__ingredient-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem 3rem;
  list-style: none;
}

.rezept__ingredient {
  display: flex;
}

.rezept__icon {
  height: 2rem;
  width: 2rem;
  fill: color-primary;
  margin-right: 1.1rem;
  flex: 0 0 auto;
  margin-top: 0.1rem;
}

.rezept__quantity {
  margin-right: 0.5rem;
  flex: 0 0 auto;
}
</style>
