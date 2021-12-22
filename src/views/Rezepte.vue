<template>
  <div class="about">
    <h1 class="text-center">Rezept Liste</h1>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Rezept Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="rezept in rezepte" v-bind:key="rezept.id">
        <td>{{ rezept.name }}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <a class="btn btn-primary" href="#" role="button" @click="$router.push('rezept')">Rezept</a>
    </div>
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
