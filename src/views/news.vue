<template>
  <div>
      <div v-for="item in users.data" :key="item.id">
        {{ item.title }}
      </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  data(){
    return {
      users : []
    }
  },
  created(){
    const vm = this;
    console.log( '비동기 호출 전 this : ', this )

    fetchNewsList()
    .then(function(res){
		console.log( '비동기 호출 후 this : ', this )
      vm.users = res;      
    })
    .catch(function(err){
      console.log(err);
      
    })
  }
}
</script>

<style>

</style>