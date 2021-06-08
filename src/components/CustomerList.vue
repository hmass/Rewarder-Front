<template>
    <div>
        <h3>Customers List</h3>
        <button @click="generateVouchers" class="btn-success btn-sm">Generate Vouchers</button>
        <table id="customertable" class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Order Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers.data" :key="customer.id">
                    <td class="align-middle">{{ customer.customer_id }}</td>
                    <td class="align-middle">{{ customer.name }}</td>
                    <td class="align-middle">{{ customer.order_value }}</td>
                                        
                </tr> 
                
            </tbody>
        </table>
    </div>
    
</template>
<script>
import axios from "axios";
export default {
    name: 'CustomerList',
    data(){
        return {
            customers: {}
        }
    },
    methods: {
        async fetchCustomers(){
            try {
                const response = await axios.get('customers');
                this.customers = response.data;
            } catch (e) {
                console.log('error occured')
            }
            
        },

        //generate vouchers
        async generateVouchers(){
            const resp = await axios.get('vouchers/generate')
            console.log(resp);

            this.$router.push('/vouchers')
        }

    },
    created(){
        this.fetchCustomers();
    },
    mounted() {
      console.log('Component mounted.')
    }
}
</script>
