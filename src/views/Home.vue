<template>
  <layout-vertical>
    <div id="app">
  <b-table responsive="sm" :customers="customers" />

  <b-row>
    <table id="void-table" responsive="sm" :item="items" :current-page="currentPage">
      <tbody>
        <tr>
          <td>{{ item.Billing_ID }}</td>
        </tr>
      </tbody>
    </table>
  </b-row>
</div>
</layout-vertical>
</template>

<script>

//import { BCard, BCardText, BLink } from 'bootstrap-vue'
import Option from './Option.vue'
import axios from 'axios'
import { BTable } from 'bootstrap-vue'
//import {ref, onMounted} from 'vue'



/*const users = ref({})

  const fetch_users = async() => {
  await axios.get('${import.meta.env.VUE_APP_ENDPOINT_BACKEND}/users')
  .then((response) => {
      console.log(response.data.data)
      users.value = response.data.data
      console.log(users.value)
  }).catch((err) => {
      console.log(err)
  })
  }

onMounted(() => fetch_users())*/

export default {
  name: "App",
  components: {
    Option,
    BTable,
  },
  data() {
    return {
      items: [
      /*{
        Billing_ID: '#00000', Type: 'Void', Staff: 'nisa', Detail: '-1 Premium Wonton 390.00 (390.00)',
        Voidreason: 'Mistake', Date: '3 January 2024, 1:49 p.m.', CloseShift: '	3 January 2024, 1:57 p.m.',
        BillDetail: 'Detail',
      },
      {
        Billing_ID: '#00001', Type: 'Void', Staff: 'nisa', Detail: '-1 Premium Wonton 390.00 (390.00)',
        Voidreason: 'Mistake', Date: '3 January 2024, 1:49 p.m.', CloseShift: '	3 January 2024, 1:57 p.m.',
        BillDetail: 'Detail',
      },*/
      ]
    }
  },
  mounted() {
    axios.get('https://partner1.triggersplus.com/report/order_transaction/year/2024/month/1/')
      .then((resp) => {
        this.items = resp.data.response
        console.log(this.items)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}
</script>

<style></style>
