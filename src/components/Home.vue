<template>
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h3 v-if="user" class="display-5 fw-bold">Hi {{user.first_name}} {{user.last_name}}</h3>
            <h1 class="display-5 fw-bold">Welcome to Rewarder</h1>
            <p class="col-md-8 fs-4">Your customers should be your priority.</p>
            
          </div>
        </div>
</template>

<script>

import { mapGetters } from "vuex";

export default{
    name: 'Home',
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
