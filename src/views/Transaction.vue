<template>
    <layout-vertical>
        <b-form-group>
            <b-row>
                <b-col md="3">
                    <h6>Data Filter</h6>
                    <b-form-group>
                        <v-select v-model="selected" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" label="title"
                            :options="option" />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col md="3">
                    <h6>Choose Date</h6>
                    <b-form-group>
                        <v-select v-model="selected" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :date="datefil" />
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form-group>
        <div>

            <table border="2px" align="center" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                <tr align="center">
                    <td>Billing ID</td>
                    <td width="60">Name</td>
                    <td>Type</td>
                    <td>Detail</td>
                    <td width="190">Date-Time</td>
                </tr>
                <tr align="center" v-for="item in list" v-bind:key="item.id"
                    v-if="!(item[0][4] === 'Void' || item[0][4] === 'Cancel Bill')">

                    <td>{{ item[0][6] }}</td>
                    <td>{{ item[0][4] }}</td>
                    <td>{{ item[0][3] }}</td>
                    <td>{{ item[0][5] }}</td>
                    <td>{{ item[0][7] }}</td>
                </tr>
            </table>
            <b-row>
                <p class="mt-3">Showing {{ currentPage }} to 8 of 100 entries</p>
                <div class="demo-spacing-0">
                    <b-pagination class="mt-3" align="right" v-model="currentPage" :per-page="perPage"
                        aria-controls="void-table" :total-rows="rows" first-number last-number prev-class="prev-item"
                        next-class="next-item">
                        <template #prev-text>
                            <feather-icon icon="ChevronLeftIcon" size="18" />
                        </template>
                        <template #next-text>
                            <feather-icon icon="ChevronRightIcon" size="18" />
                        </template>
                    </b-pagination>
                </div>
            </b-row>
        </div>
        <!-- <template>
            

        </template>
        <template>
            <div>
                <b-row>
                    <b-table id="void-table" responsive 
                    :per-page="perPage" :current-page="currentPage" :fields="fields">
                    <b-td :item="items">{{item[0][0]}}</b-td>
                    
                    </b-table>

                </b-row>
                
            </div>
        </template>



        </template> -->
        <router-view />

        <template #navbar="{ toggleVerticalMenuActive }">
            <navbar :toggle-vertical-menu-active="toggleVerticalMenuActive" />
        </template>
    </layout-vertical>
</template>
  
<script>
import axios from 'axios'
import Vue from 'vue';
import { BTable } from 'bootstrap-vue'
import { BRow, BCol, BFormGroup } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import { BPagination } from 'bootstrap-vue'
import vSelect from 'vue-select'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'
Vue.use(axios)
export default {
    name: "Void",
    components: {
        AppCustomizer,
        BRow,
        BCol,
        flatPickr,
        BFormGroup,
        vSelect,
        BTable,
        BPagination,
    },
    data() {
        return {
            showCustomizer: $themeConfig.layout.customizer,
            date: null,
            dateDefault: null,
            timePicker: null,
            dateNtim: null,
            multiDate: null,
            rangeDate: null,

            selected: { title: 'Default' },
            currentPage: 1,
            perPage: 8,
            rows: 200,

            fields: [
                {
                    key: 'billing_ID',
                    sortable: false
                },
                {
                    key: 'type',
                    sortable: false,
                    label: 'Void Type'
                },
                {
                    key: 'staff',
                    sortable: true
                },
                {
                    key: 'detail',
                    sortable: false
                },
                {
                    key: 'void_reason',
                    sortable: false
                },
                {
                    key: 'void_date_time',
                    sortable: true
                },
                {
                    key: 'close_shift',
                    sortable: true,
                    label: 'Close Shift Date'
                },
                {
                    key: 'bill_detail',
                    sortable: false
                },
            ],

            option: [
                {
                    title: 'Default'
                },
                {
                    title: 'Last 7 Days'
                },

                {
                    title: 'Last 30 Days'
                },
                {
                    title: 'This Month'
                },
                {
                    title: 'Last Month'
                },
                {
                    title: 'Custom Range'
                }
            ],
            datefil: [
                {
                    title: 'Aperture',

                },
            ],

            list: undefined,
            filter: null,
            filterOn: [],

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

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>