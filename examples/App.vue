<template>
  <div id="app">
    <button @click="changeExample">切换案例</button>
    <example1 v-if="exampleSelect===1" />
    <example2 v-else-if="exampleSelect===2" />
  </div>
</template>

<script>
import { setRem } from './utils'
import example1 from './components/example1.vue'
import example2 from './components/example2.vue'


export default {
  name: 'app',
  data() {
    return {
      exampleSelect:1
    }
  },
  components: {
    example1,example2
  },
  mounted() {
    setRem(1920)
  },
  methods: {
    changeExample(){
      if(this.exampleSelect===3){
        this.exampleSelect=1
      }
      else{
        this.exampleSelect++
      }
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(240, 240, 240);
}
</style>
