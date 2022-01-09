<template>
  <div class="about">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h1 class="text-center">Rezepte-Liste</h1>
    <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="$router.push('createRezept')">Erstelle ein Rezept <i class="fa fa-plus"></i></button>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">
          <h1 class="table-colname">Rezept-Name</h1>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="rezept in rezepte" v-bind:key="rezept.id">
        <td class="info">
          <h3>{{ rezept.name }} <span class="badge bg-secondary">{{ rezept.vorbereitungsZeit + rezept.kochZeit }} Minuten</span>
          </h3>
        </td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-success"
                  @click="$router.push({ name: 'RezeptPage', params: { id: rezept.id }})">Zu Rezept <i
            class="fa fa-arrow-right"></i></button>
          <button type="button" class="btn btn-warning"
                  @click="$router.push({ name: 'BearbeiteRezept', params: { id: rezept.id }})">Rezept Bearbeiten <i
            class="fa fa-circle-o"></i></button>
          <button type="button" class="btn btn-danger" @click="deleteRecipe(rezept.id)">Rezept Löschen <i
            class="fa fa-trash"></i></button>
        </div>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { BACKEND_BASE_URL, BACKEND_REZEPTE_ALL } from '@/urlconstants'

export default {
  name: 'Rezepte',
  data () {
    return {
      rezepte: []
    }
  },
  methods: {
    deleteRecipe (id) {
      const endpoint = BACKEND_BASE_URL + id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => {
          this.rezepte = this.rezepte.filter(rezept => rezept.id !== id)
        })
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = BACKEND_REZEPTE_ALL
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(rezept => {
        this.rezepte.push(rezept)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>
.about {
  margin-top: 2rem;
}

.btn-outline-primary {
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}

.text-center {
  font-size: xx-large;
  font-weight: 700;
  text-transform: uppercase;
}

.table-colname {
  font-size: x-large;
  font-weight: 700;
}

</style>
