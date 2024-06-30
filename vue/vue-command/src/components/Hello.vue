<template>
    <div>{{msg}}</div>

    <div v-text="msg2"></div>

    <div v-html="msg3"></div>

</template>

<script setup>
const msg = 'hello world'
const msg2 = 'hello vue'
const msg3 = '<p>床前明月光</p>'  // 富文本

</script>

<style lang="css" scoped>

</style>