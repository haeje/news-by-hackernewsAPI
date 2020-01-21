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
    fetchNewsList()
    .then((res) => this.users = res)
    .catch((err)=> console.log(err))
  }
}
</script>

<style>

</style>