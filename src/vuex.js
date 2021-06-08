import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);


//state
const state = {
    user: null
}

//store
const store = new Vuex.Store({

    state,

    //getting the current state
    getters: {

        user (state) {
            return state.user;
        }


    },

    //requesting state change
    actions: {
        user(context, user){
            context.commit('user', user);
        }

    },

    //changing the state
    mutations: {
        user (state, user) {
            state.user = user;
        }

    }
});


export default store;