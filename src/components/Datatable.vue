<template>
    <div>
        

            <div class="row mb-3">
                     <div class="col md-3">

                        <div class="input-group mb-4">
                            <input type="text" v-model="search"  class="form-control" id="search" placeholder="search...">
                            <button class="btn btn-success" id="advanced-search-button" @click.prevent="handleSearch" type="button">
                            <i class="fa fa-search">
                                <FontAwesomeIcon :icon="faSearch" size="1x" />
                            </i>
                            </button>
                        </div>
                    </div>

                    <div class="col-md-2">
                        <div class="input-group">
                            <label for="pageOptions" class="mt-2 mr-2">Per page</label>
                            <select v-model="perPage" @change= "handlePerPage" id="pageOptions" class="form-control">
                                <option v-for="page in pageOptions" :value="page" :key="page">{{page}}</option>
                            </select>
                        </div>
                    </div>

                </div> 
    <table class="table table-hover table-striped">
        <thead class="table-dark">
            <tr>
                <th scope="col" v-for="column in columns" :key="column" @click="handleSort(column)">{{column.toUpperCase().replace("_"," ") + " "}}
                    <span v-if="column == sortField">
                        

                            <i v-if="sortOrder == 'asc'">
                                <FontAwesomeIcon :icon="caretUp" size="1x" />
                            </i>
                            <i v-else>
                                <FontAwesomeIcon :icon="caretDown" size="1x" />
                            </i>
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="tableData.length == 0 && !loading" style="text-align: center">
                No records found
            </tr>

            <tr v-if="loading">
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </tr>
            <tr v-else v-for="data in tableData" :key="data.id">
                <td v-for="column in columns" :key="column">{{data[column]}}</td>
            </tr>
            
        </tbody>
        </table>
        <paginator :pagination="pagination" v-if="tableData.length > 0" @pageChanged="handlePageChanged"/>
    </div>
</template>

<script>
import axios from 'axios';
import Paginator from './Paginator.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
export default {
    name: 'Datatable',
    data(){
        return {
            tableData: [],
            sortField: this.columns[0],
            sortOrder: "asc",
            search: null,
            perPage: 10,
            pageOptions: [10, 20, 50, 100],
            currentPage: 1,
            pagination: {to:1, from: 1},
            loading: true,

            caretUp: faCaretUp,
            caretDown: faCaretDown,
            faSearch:faSearch
        }
    },
    components: { 
        Paginator,
        FontAwesomeIcon
    },
    
    props: {
        url: {
            type: String,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    },

    mounted(){
        
        this.fetchData();
    },

    created(){
        
    },
    methods: {
        async fetchData(){

            try {
                this.loading = true
                //request params
                const params = {
                    sort_field: this.sortField,
                    sort_order: this.sortOrder,
                    search: this.search,
                    per_page: this.perPage,
                    page: this.currentPage
                }

                const { data } = await axios.get(this.url, {params});
                this.tableData = data.data;
                this.pagination = data.meta;

                this.loading = false
            } catch (e) {
                console.log('error occured')
            }
            
        },
        //handle sort
         handleSort(column){
             
            if (column == this.sortField) {
                this.sortOrder = (this.sortOrder === 'asc') ? 'desc' : 'asc'
            }else{
                this.sortField = column
                this.sortOrder = 'asc'
            }

            this.fetchData();
        },
        //handle search
        //use debounce from lodash ans useRef from react
        handleSearch(){
            this.currentPage = 1;
            this.fetchData();
        },

        //handle per page
        handlePerPage($event){
            this.currentPage = 1
            this.perPage = $event.target.value
            this.fetchData();
        },

        //handle per page
        handlePageChanged(pageNumber){
            this.currentPage = pageNumber
            this.sortOrder = 'asc'
            this.sortField = this.columns[0],
            this.fetchData();
        }





    }
}
</script>

<style>

</style>