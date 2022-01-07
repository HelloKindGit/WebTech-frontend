<template>
  <div id="home">
    <h1 class="title">
      Rezepty
    </h1>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="icon"><i class="fa fa-book"></i></div>
    <h1>Dein Kochbuch</h1>
    <div v-if="this.$root.authenticated">
      <p>Welcome back, {{ claims.name }}!</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function () {
    return {
      claims: ''
    }
  },
  created () {
    this.setup()
  },
  methods: {
    async setup () {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser()
      }
    }
  }
}
</script>
<style scoped>
.icon {
  border: none;
  padding: 12px 16px;
  font-size: 100px;
}

.title {
  position: center;
  font-weight: 700;
  font-size: 3.25rem;
  text-transform: uppercase;
  line-height: 1.95;
  text-align: center;
}
</style>
