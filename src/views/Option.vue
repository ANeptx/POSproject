<template>
  <b-container>

    <b-col md="2" class="filter">
      <b-form-group label-cols-sm="3" label-align-sm="right" label-size="sm" label-for="filterInput" class="mb-0">
        <b-input-group size="sm">
          <b-form-input id="filterInput" v-model="filter" type="search" placeholder="Search" />
        </b-input-group>
      </b-form-group>
    </b-col>

    <h6>Void Report</h6>
<template>
    <b-row>
      <b-table id="void-table" outlined hover :per-page="perPage" :current-page="currentPage" 
      :fields="fields" >
      <b-tr v-for="item in list" v-bind:key="item.id">
        <b-td>{{ item[0][0] }}</b-td>
        <!-- <b-td >{{item[0][0]}}</b-td> -->
      </b-tr>

      </b-table>
    </b-row>
  </template>
    <!-- <table border="2px" :filter="filter"
        :filter-included-fields="filterOn"
        @filtered="onFiltered">
        <tr>
            <td>Billing ID</td>
            <td>Type</td>
            <td>Staff</td>
            <td>Detail</td>
            <td>Void Reason</td>
            <td>Void Date-Time</td>
            <td>Close Shift</td>
            <td>Bill Detail</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id" v-if="(item[0][4] === 'Void' || item[0][4] === 'Cancel Bill')">
            <td>{{item[0][6]}}</td>
            <td>{{item[0][4]}}</td>
            <td>{{item[0][3]}}</td>
            <td>{{item[0][5]}}</td>
            <td>{{item[0][9]}}</td>
            <td>{{item[0][1]}}</td>
            <td>{{item[0][7]}}</td>
            <td><a href="https://partner1.triggersplus.com/admin/order_archive/order_archive/?=${item[0][7]}">Detail</a></td>
        </tr>
    </table> -->
  </b-container>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { BCol, BFormGroup, BRow, BTable } from 'bootstrap-vue'
import { BInputGroup } from 'bootstrap-vue'
Vue.use(axios)
export default {
  components:
  {
    BTable,
    BCol,
    BFormGroup,
    BRow,
  },
  name: "Option",
  data() {
    return {
      list: [],
      filter: null,
      filterOn: [],
      items: items,
      topics: topics,


      fields: [
        {
          //key: 'billing_ID',
          sortable: false,
          label: 'Billing ID'
        },
        {
          //key: 'type',
          sortable: false,
          label: 'Void Type'
        },
        {
          //key: 'staff',
          sortable: true,
          label: 'Staff'
        },
        {
          //key: 'detail',
          sortable: false,
          label: 'Detail'
        },
        {
          //key: 'void_reason',
          sortable: false,
          label: 'Void reason'
        },
        {
          //key: 'void_date_time',
          sortable: true,
          label: 'Void Date Time'
        },
        {
          //key: 'close_shift',
          sortable: true,
          label: 'Close Shift Date'
        },
        {
          //key: 'bill_detail',
          sortable: false,
          label: 'Billing Detail'
        },
      ],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  mounted() {
    axios.get('https://partner1.triggersplus.com/report/order_transaction/year/2024/month/1/')
      .then((resp) => {
        this.list = resp.data.datas
        console.log(resp)
      })
    this.totalRows = this.list.length
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },

}
</script>

<style></style>