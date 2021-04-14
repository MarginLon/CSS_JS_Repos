<template>
    <div>
        hello world
        {{name}}
        <input type="text" v-model="name">
    </div>
</template>
<script>
export default{
    data(){
        return {
            name:"Margin",

        };
    },
};
</script>