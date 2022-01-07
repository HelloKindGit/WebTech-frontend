<template>
  <div id="profile">
    <h1>Mein Nutzer-Profil</h1>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th>Information</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(claim, index) in claims.slice(1, 6)" :key="index">
        <td>{{ claim.claim.toUpperCase() }}</td>
        <td :id="'claim-' + claim.claim">{{ claim.value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  data () {
    return {
      claims: []
    }
  },
  async created () {
    this.claims = Object.entries(await this.$auth.getUser()).map(entry => ({
      claim: entry[0],
      value: entry[1]
    }))
  }
}
</script>

<style>
#profile {
  margin-top: 2rem;
}
</style>
