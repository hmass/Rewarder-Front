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
            <button type="submit" class="btn btn-primary">Submit</button>

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
            error: ''
        }
    },

    methods: {


        async handleSubmit(){

            try {
                const response = await axios.post('login', {
                email: this.email,
                password: this.password
                });

                //store the token
                localStorage.setItem('token', response.data.token);

                //trigger action

                this.$store.dispatch('user', response.data.user);

                this.$router.push('/');

            } catch (e) {
                this.error = 'Invalid username/password';
            }
            


        }
    }
}
</script>
