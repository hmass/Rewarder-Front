<template>
    <div>
        <h3>Customers Vouchers</h3>
        <Datatable url="vouchers" :columns="['customer_id','name','order_value','voucher_value','redeemed']"/>
    </div>
    
</template>
<script>
import axios from "axios";
import Datatable from './Datatable.vue';
export default {
    name: 'VoucherList',
    data(){
        return {
            vouchers: {}
        }
    },

    components:{
        Datatable
    },
    methods: {

        //fetch vouchers
        async fetchVouchers(){
            try {
                const response = await axios.get('vouchers');
                this.vouchers = response.data;
            } catch (e) {
                console.log('error occured')
            }
            

        },

        

    },
    created(){
        this.fetchVouchers();

    },
    mounted() {
      console.log('Component mounted.')
    }
}
</script>
