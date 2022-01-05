<template>
  <div class="home">
    <h1>Rezepty</h1>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="icon"><i class="fa fa-book"></i></div>
    <Kochbuch msg="Dein Kochbuch"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Kochbuch from '@/components/Kochbuch.vue'

export default {
  name: 'Home',
  components: {
    Kochbuch
  }
}
</script>
<style scoped>
.icon {
  border: none;
  padding: 12px 16px;
  font-size: 100px;
}
</style>
