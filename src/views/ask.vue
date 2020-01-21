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
    fetchAskList()
      .then((res) =>this.ask = res)
  }
}
</script>

<style>

</style>