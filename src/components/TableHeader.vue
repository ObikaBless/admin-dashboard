<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const totalPayable = computed(() => store.getters.totalPayable);

const changeTab = (tab)=>{
    store.commit('changeTab', tab);
}

const currentTab = computed(()=>store.state.currentTab);

</script>
<template>
    <div>
        <!--  HEADING   -->
        <h1 class="heading">Table Heading</h1>

        <!-- NAVIGATION  -->

        <div class="tabs">
            <span data-tab-value="#tab_1" :class="{'active-tab': currentTab == 'all'}" @click="changeTab('all')">All</span>
            <span data-tab-value="#tab_2" :class="{'active-tab': currentTab == 'paid'}" @click="changeTab('paid')">Paid</span>
            <span data-tab-value="#tab_3" :class="{'active-tab': currentTab == 'unpaid'}" @click="changeTab('unpaid')">Unpaid</span>
            <span data-tab-value="#tab_4" :class="{'active-tab': currentTab == 'overdue'}" @click="changeTab('overdue')">Overdue</span>

            <div class="navigation">
                <span> Total payable amount: <b class="amount">${{totalPayable}}</b> USD</span>
            </div>
        </div>
        <hr>
    </div>
</template>