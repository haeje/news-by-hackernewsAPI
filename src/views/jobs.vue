<template>
  <div>
      <div v-for="item in jobs.data" :key="item.id">
        {{ item.title }}
      </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index"
export default {
  data(){
    return {
      jobs : []
    }
  },
  created(){
    const vm = this;
    fetchJobsList()
      .then(function(res){
        vm.jobs = res;
      })
  }
}
</script>

<style>

</style>