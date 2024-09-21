<template>
    <i :class="'v-' + name"></i>
</template>

<script>
    export default{
        name:'VIcon',
        props:{
            name:String
        }
    }
</script>

<style>
@import url('./iconfont.css')
</style>