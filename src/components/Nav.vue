<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="/images/logo.png" alt="Rewarder" class="img-fluid" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">Home</router-link>
                    </li>
                    <li class="nav-item" v-if="user">
                        <router-link class="nav-link" to="/customers">Customers</router-link>
                    </li>
                    <li class="nav-item" v-if="user">
                        <router-link class="nav-link" to="/vouchers">Vouchers</router-link>
                    </li>
                </ul>
                <div class="d-flex" v-if="!user">
                    <router-link to="/register" class="btn btn-light ms-3">Register</router-link>
                    <router-link to="/login" class="btn btn-light ms-3">Login</router-link>
                </div>
                <div class="d-flex" v-if="user">
                    <a href="javascript:void(0)" @click="handleLogout"  class="btn btn-light ms-3">Logout</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';
//import getters
import { mapGetters } from "vuex";

export default{
    name: 'Nav',

     
    methods: {
        
         


        async handleLogout(){


            try {
                const response = await axios.post('logout');

                console.log(response.data.message)
                localStorage.clear();
                this.$store.dispatch('user', null)
                this.$router.push('/')

            } catch (e) {
                console.log(e.response.data.message)
            }


            // localStorage.removeItem('token');
            // this.$store.dispatch('user', null)
            // this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
