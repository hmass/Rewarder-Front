<template>
    <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" :class="{'disabled' : pagination.current_page === 1}">
                        <a class="page-link" href="#" @click.prevent="pageChanged()">First Page</a>
                    </li>
                    
                    <li class="page-item" :class="{'disabled' : pagination.current_page === 1}">
                        <a class="page-link" href="#" @click.prevent="pageChanged(pagination.current_page - 1)">Previous</a>
                    </li>
                    
                    <li class="page-item" v-for="page in pageNumbers" :key="page" :class="{'active' : page === pagination.current_page}">
                        <a class="page-link" href="#" v-text="page" @click.prevent="pageChanged(page)"></a>
                    </li>    

                    <li class="page-item" :class="{'disabled' : pagination.current_page === pagination.last_page}">
                        <a class="page-link" href="#" @click.prevent="pageChanged(pagination.current_page + 1)">Next</a>
                    </li>

                    <li class="page-item" :class="{'disabled' : pagination.current_page === pagination.last_page}">
                        <a class="page-link" href="#" @click.prevent="pageChanged(pagination.last_page)">Last Page</a>
                    </li>

                    <span class="mt-2 ms-2">
                        <i>
                            Showing {{pagination.from}} - {{pagination.to}} of {{pagination.total}} entries
                        </i>
                    </span>
                </ul>
            </nav>
</template>

<script>
export default {

    name: 'Paginator',
    props:{
        pagination: {type: Object, required: true}
    },

    data(){
        return {
            offset: 4
        }
    },

    computed:{
        pageNumbers() {

            let pages = []
            const {last_page, current_page} = this.pagination

            if (!this.pagination.to) {
                return []
            }

            let fromPage = current_page - this.offset
            if (fromPage < 1) {
                fromPage = 1
            }

            let toPage = fromPage + (this.offset * 2)

            if (toPage >= last_page) {
                toPage = last_page
            }

            for (let page = fromPage; page <= toPage; page++) {
                pages.push(page)
            }

            return pages

        }
    },

    methods:{
        pageChanged(page){
            //emit event to parent(datatable)
            this.$emit('pageChanged', page);
        }
    }

}
</script>

<style>

</style>