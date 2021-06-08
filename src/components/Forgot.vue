<template>

    <div class="row align-items-md-stretch">
      <div class="col-md-3">
        
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <form @submit.prevent="handleSubmit">
            <div v-if="message" class="alert alert-success" role="alert">
                {{message}}
            </div>
            <error v-if="error" :error="error"/>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
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
    name: 'Forgot',
    components: {
        Error
    },
    data() {
        return {
            email: '',
            message: '',
            error: ''
        }
    },

    methods: {
        async handleSubmit() {
            
            try {
                    await axios.post('forgotpassword', {
                    email: this.email
                });

                this.message = 'Check your email';
                this.error = '';

            } catch (e) {
                this.error = 'An error occured while sending the email';
                this.message = ''
            }
           
            
        }
    }
}
</script>