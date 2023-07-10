<script setup>
import { computed, ref } from 'vue';
import { useStore  } from 'vuex';
// UserData component
import UserData from '@/components/UserData.vue';

const store = useStore();

const currentTab = computed(()=>store.state.currentTab);

const users = computed(()=>{
  if(currentTab.value == 'all'){
    return store.getters.allUsers;
  }else if(currentTab.value == 'paid'){
    return store.getters.paidUsers;
  }else if(currentTab.value == 'unpaid'){
    return store.getters.unpaidUsers; 
  }else if(currentTab.value == 'overdue'){
    return store.getters.overDueUsers;
  }
});

const filter = (filter)=>{
  store.commit('filter', filter);
}

const userSearchInput = ref('');

const searchUser = ()=>{
  store.dispatch('searchUser', userSearchInput.value);
}

</script>

<template>
  <div class="tab-content">
        <div class="tabs__tab active" id="tab_1" data-tab-info>
            <div class="board">
              <div class="d-flex justify-content-between align-items-center iJnput-group p-2">
                <div class="">
                  <button @click="showFilter = !showFilter" class="btn btn-md shadow d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-filter"></i>
                  Filter
                </button>

                <ul class="dropdown-menu">
                  <li @click="filter('alpha')"><a class="dropdown-item" href="#">Alphabetical </a></li>
                  <li @click="filter('date')"><a class="dropdown-item" href="#">Date</a></li>
                  <li @click="filter('fname')"><a class="dropdown-item" href="#">First Name</a></li>
                  <li @click="filter('lname')"><a class="dropdown-item" href="#">Last Name</a></li>
                </ul>
                </div>

                <div class="input-group" style="width: 600px;">
                  <span @click="searchUser" class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                  <input type="text" v-model="userSearchInput" class="form-control" placeholder="Search Users by Name, Email or Date">
                </div>

                <button class="btn btn-sm btn-primary" style="background-color: #6060af;">PAY DUES</button>
              </div>
                <table width="100%">
                    <thead>
                        <!-- the filter section goes here  -->
                        <tr class="table-head">
                            <td>
                                <input class="checkbox" type="checkbox" name="checkbox" id="">
                            </td>
                            <td>NAME</td>
                            <td>USER STATUS</td>
                            <td>PAYMENT STATUS</td>
                            <td>AMOUNT</td>
                            <td>
                                
                            </td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                    </thead>
                    <tbody>
                        <UserData v-for="user in users" key="user.id" :user=user />
                    </tbody>
                </table>
              </div>
        </div>
    </div>
</template>
