<template>
  <div class="home">
    首页
  </div>
</template>

<script>
// @ is an alias to /src
import {getAA} from '@/api/index.js'
export default {
  name: 'Home',
  created(){
    getAA();
  },
};
</script>
