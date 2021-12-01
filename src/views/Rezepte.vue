<template>
  <div class="about">
    <h1 class="text-center">Rezept Liste</h1>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Rezept Id</th>
        <th>Rezept Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="rezept in rezepte" v-bind:key="rezept.id">
        <td>{{ rezept.id }}</td>
        <td>{{ rezept.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RezeptService from '../services/RezeptService'

export default {
  name: 'Rezepte',
  data () {
    return {
      rezepte: []
    }
  },
  methods: {
    getRezepte () {
      RezeptService.getRezepte().then((response) => {
        this.rezepte = response.data
      })
    }
  },
  created () {
    this.getRezepte()
  }
}
</script>
