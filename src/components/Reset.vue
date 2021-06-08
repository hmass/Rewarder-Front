<template>

    <div class="row align-items-md-stretch">
      <div class="col-md-3">
        
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <form @submit.prevent="handleSubmit">
           
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

export default {
    name: 'Reset',

    data() {
        return {
            password: '',
            c_password: ''
        }
    },

    methods: {
        async handleSubmit() {
            
            const response = await axios.post('reset', {
                password: this.password,
                c_password: this.c_password,
                token: this.$route.params.token
            });


            console.log(response);

            this.$router.push('/login');
            
        }
    }
}
</script>