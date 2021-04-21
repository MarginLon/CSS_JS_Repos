<template>
  <div>
     <router-view></router-view>
     <bot-nav/>
  </div>
</template>

<script>
import botnav from "../components/common/botNav";
import BotNav from '../components/common/botNav.vue';
export default {
    name:'XXX',
    data(){
        return {

        }
    },
    components: {
        'bot-nav':botnav
    }
}
</script>

<style lang="less">

</style>