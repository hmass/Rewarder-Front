<template>
    <div>
        <div class="row">
            <h3>Customers List</h3>
            <div class="mt-2">
                <button @click="generateVouchers" class="btn-success btn-sm">Generate Vouchers</button>
            </div>
        </div>
        <br>
        
        <Datatable url="customers" :columns="['customer_id','name','order_value']"/>
       
    </div>
    
</template>
<script>
import axios from "axios";
import Datatable from './Datatable.vue';
export default {
    name: 'CustomerList',
    data(){
        return {
            customers: {}
        }
    },
    components:{
        Datatable
    },
    methods: {
        

        //generate vouchers
        async generateVouchers(){
            const resp = await axios.get('vouchers/generate')
            console.log(resp);

            this.$router.push('/vouchers')
        },

        showAlert(){
                this.$swal({
              title: '<i>Please wait</i>',
          html:
                '<div class="text-center">'+
                    '<div class="spinner-border" role="status">'+
                        '<span class="visually-hidden">Loading...</span>'+
                    '</div>'+
                '</div>',
          showCloseButton: false,
          showCancelButton: false,
          focusConfirm: false,
          showConfirmButton: false
        })
        }


    }
}
</script>
