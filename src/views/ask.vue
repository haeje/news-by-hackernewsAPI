<template>
  <div>
    <div v-for="item in ask.data" :key="item.id">
        {{ item.title }}
      </div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index"
export default {
  data(){
    return {
      ask : []
    }
  },
  created(){
    const vm = this;
    fetchAskList()
      .then(function(res){
        vm.ask = res;
      })
  }
}
</script>

<style>

</style>