<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Rezepty App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/"><i class="fa fa-home"></i>Home</router-link>
          <router-link class="nav-link" to="/about"><i class="fa fa-info-circle"></i>About</router-link>
          <router-link class="nav-link" to="/rezepte"><i class="fa fa-book"></i>Rezepte</router-link>
          <router-link class="nav-link" to="/profile" v-if="authenticated"><i class="fa fa-user-circle-o"></i>Profil</router-link>
          <router-link class="nav-link" to="/login" v-if="!authenticated"><i class="fa fa-sign-in"></i>Login</router-link>
          <a class="nav-link" v-if="authenticated" v-on:click="logout()">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return { authenticated: false }
  },
  async created () {
    await this.isAuthenticated()
    this.$auth.authStateManager.subscribe(this.isAuthenticated)
  },
  watch: {
    $route: 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style>
nav div a {
  margin-right: 10px
}

.nav-link {
  font-size: larger;
}

.fa {
  margin-right: 0.5rem;
}
</style>
