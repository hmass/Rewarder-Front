<template>
    <div>
        <h3>Customers Vouchers</h3>
        
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Customer Id</th>
                <th scope="col">Name</th>
                <th scope="col">Order Value</th>
                <th scope="col">Voucher Value</th>
                <th scope="col">Redeemed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="voucher in vouchers.data" :key="voucher.id">
                    <td class="align-middle">{{ voucher.customer_id }}</td>
                    <td class="align-middle">{{ voucher.name }}</td>
                    <td class="align-middle">{{ voucher.order_value }}</td>
                    <td class="align-middle">{{ voucher.voucher_value }}</td>
                    <td class="align-middle">{{ voucher.redeemed }}</td>
                </tr> 
               
            </tbody>
        </table>
    </div>
    
</template>
<script>
import axios from "axios";
export default {
    name: 'VoucherList',
    data(){
        return {
            vouchers: {}
        }
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
