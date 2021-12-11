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
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/rezepte/all'
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
