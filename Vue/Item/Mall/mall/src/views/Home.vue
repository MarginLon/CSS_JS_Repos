<template>
  <div class="home">
    <my-tab-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    ></my-tab-bar>首页
  </div>
</template>

<script>
// @ is an alias to /src
import { getAA, getCart } from "@/api/index.js";
export default {
  name: "Home",
  created() {
    // getCart();
  },
  // method:{
  //   @click-left="onClickLeft"
  //   @click-right="onClickRight"
  //   onClickLeft(){},
  //   onClickRight(){},
  // }
};
</script>
