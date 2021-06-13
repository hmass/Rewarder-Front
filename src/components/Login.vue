<template>

    <div class="row align-items-md-stretch">
      <div class="col-md-3">
        
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <form @submit.prevent="handleSubmit">
            <error v-if="error" :error="error"/>

            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="password">
            </div>
            <button v-if="!loading" type="submit" class="btn btn-primary">Submit</button>

            <button v-else class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                wait...
            </button>

             <li class="nav-item">
                <router-link class="nav-link" to="/forgot">Forgot password</router-link>
            </li>
        </form>
        </div>
      </div>
      <div class="col-md-3">
        
      </div>
    </div>
    
</template>

<script>

import axios from "axios";
import Error from './Error.vue';

export default {
  components: { Error },
    name: 'Login',
    data(){
        return {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    },

    methods: {


        async handleSubmit(){

            try {
                this.loading = true
                const response = await axios.post('login', {
                email: this.email,
                password: this.password
                });

                //store the token
                localStorage.setItem('token', response.data.token);

                //trigger action

                this.$store.dispatch('user', response.data.user);

                this.$router.push('/');
                this.loading = false

            } catch (e) {
                this.error = 'Invalid username/password';
                this.loading = false
            }
            


        }
    }
}
</script>
