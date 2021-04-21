<template>
<div class="bot_nav_box">
    <router-link to="/">
        <div class="iconfont icon-home"></div>
        <div class="title">首页</div>
    </router-link>
    <router-link to="/list">
        <div class="iconfont icon-list"></div>
        <div class="title">分类</div>
    </router-link>
    <router-link to="/cart">
        <div class="iconfont icon-cart-full"></div>
        <div class="title">购物车</div>
    </router-link>
    <router-link to="/user">
        <div class="iconfont icon-user"></div>
        <div class="title">我的</div>
    </router-link>
</div>
</template>

<script>
export default {
    name: "XXX",
    data() {
        return {};
    },
    components: {},
};
</script>

<style lang="less">
.bot_nav_box {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;

    a{
        display: block;
        flex: 1;
        color: #333;
        .iconfont{
            font-size: 20px;
        }
    }
    
    a.current-exact{
        color:seagreen
    }

    

}
</style>
