<template>
  <div class="about">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h1 class="text-center">Rezepte-Liste</h1>
    <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="$router.push('createRezept')">Erstelle ein Rezept <i class="fa fa-plus"></i></button>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Alle Rezepte</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="rezept in rezepte" v-bind:key="rezept.id">
        <td class="info">
          <h3>{{ rezept.name }} <span class="badge bg-secondary">{{ rezept.vorbereitungsZeit + rezept.kochZeit }} Minuten</span></h3>
        </td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-success" @click="$router.push({ name: 'RezeptPage', params: { id: rezept.id }})">Zu Rezept <i class="fa fa-arrow-right"></i></button>
          <button type="button" class="btn btn-warning" @click="$router.push({ name: 'BearbeiteRezept', params: { id: rezept.id }})">Rezept Bearbeiten <i class="fa fa-circle-o"></i></button>
          <button type="button" class="btn btn-danger" @click="deleteRecipe(rezept.id)">Rezept Löschen <i class="fa fa-trash"></i></button>
        </div>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Rezepte',
  data () {
    return {
      rezepte: []
    }
  },
  methods: {
    deleteRecipe (id) {
      const endpoint = 'https://webtech-anwendung.herokuapp.com/api/rezepte/' + id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = 'https://webtech-anwendung.herokuapp.com/api/rezepte/all'
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
.info {
  align-content: left;
}
</style>
