<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['user']);

const store = useStore();
const showMore = ref(false);

const userActivities = computed(()=>{
    if(showMore.value){
        return store.getters.singleUserActivity(props.user.id);
    }
});
</script>
<template>
    <tr>
        <td>
            <input class="checkbox" type="checkbox" name="checkbox" id="">
            <i @click="showMore = !showMore" class="fa fa-chevron-circle-down"></i>
        </td>
        <td class="nameField">
            <div class="nameField-desc">
                <h5>{{ user.name }}</h5>
                <p>{{ user.email }}</p>
            </div>
        </td>
        <td class="active">
                <div class="active-flex">
                
                <p>
                    <i class="fa fa-circle "></i>
                    {{ user.status }}
                </p>
                </div>
                <span>Last login: {{ user.lastLogin }}</span>
        </td>
        <td class="paid" v-if="user.paymentStatus == 'Paid'">
                <div class="paid-flex">
                
                <p>
                    <i class="fa fa-circle "></i>
                    {{ user.paymentStatus }}
                </p>
                </div>
                <span class="span2">Paid on {{ user.paymentDate }}</span>
        </td>
        <td class="overdue" v-else-if="user.paymentStatus == 'Overdue'">
            <div class="overdue-flex">
            
            <p>
                <i class="fa fa-circle "></i>
                {{ user.paymentStatus }}
            </p>
            </div>
            <span class="span2">Dued on {{ user.duesOn }}</span>
        </td>
        <td class="unpaid" v-else-if="user.paymentStatus == 'Unpaid'">
                <div class="unpaid-flex">
                
                <p>
                    <i class="fa fa-circle "></i>
                    {{ user.paymentStatus }}
                </p>
                </div>
                <span class="span2">Dues on {{ user.duesOn }}</span>
        </td>
        <td>
            
            <div class="amount2">
                <h5>$200</h5>
                <p style="font-size: 15px;">USD</p>
            </div>
            
        </td>
        <td>
            <div class="edit">
                
            <p>View More</p>
            <i class="fa fa-ellipsis-v"></i>
            </div>
        </td>
    </tr>
    <table v-if="showMore">
        <thead>
            <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="detail in userActivities" :key="detail.user_id">
                <td class="date">{{ detail.date }}</td>
                <td class="activity">{{ detail.activity }}</td>
                <td class="details">{{ detail.details }}</td>
            </tr>
        </tbody>
    </table>
    
</template>
<style scoped>
.fa-chevron-circle-down{
    cursor: pointer;
}
.fa-ellipsis-v{
    cursor: pointer;
}
thead, th{
    color: #767099;
    font-size: 14px;
    text-transform: uppercase;
}
tbody, td{
    font-size: 10px;
}
.date{
    color: #767099;
}
</style>