<template>
  <div id="app">
    <Nav />
    <div class="container py-4">
      
      <router-view />

        <footer class="pt-3 mt-4 text-muted border-top">
          &copy; 2021
        </footer>
    </div>
  </div>
</template>

<script>

  import Nav from "./components/Nav.vue";
  import axios from "axios";

  export default {
    name: 'App',
    data(){
      return {
          user: null
      }
    },
    
    components: {
      Nav
    },

    async created() {
        const response = await axios.get('user');

        this.$store.dispatch('user', response.data)

    }
  }
</script>

<style>
</style>
