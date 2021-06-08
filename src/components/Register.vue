<template>

    <div class="row align-items-md-stretch">
      <div class="col-md-3">
        
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <form @submit.prevent="handleSubmit">
              <error v-if="error" :error="error"/>
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" v-model="first_name" class="form-control" id="firstName">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" v-model="last_name" class="form-control" id="lastName">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="confirm_password" class="form-label">Confirm Password</label>
                <input type="password" v-model="c_password" class="form-control" id="confirm_password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
      <div class="col-md-3">
        
      </div>
    </div>
    
</template>

<script>

import axios from "axios";
import Error from "./Error.vue";

export default {
    name: 'Register',
    components: { Error },
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            c_password: '',
            error: ''
        }
    },

    methods: {
        async handleSubmit() {

            try {
                 await axios.post('register', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    c_password: this.c_password
                    });

            //redirect to login
                this.$router.push('/login');
            } catch (e) {
                this.error = 'Error occured'
            }
            
           
            
        }
    }
}
</script>