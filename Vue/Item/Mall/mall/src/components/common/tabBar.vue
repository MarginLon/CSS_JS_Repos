<template>
  <div class="my_tab_bar_box">
    <van-nav-bar v-bind="$attrs" v-on="$listeners">
      <template #right>...</template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "myTabBar",
};
</script>

<style>
</style>