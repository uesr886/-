<template>
  <nav>
    <span @click="changeTab(1)">基础知识</span> |
    <span @click="changeTab(2)">购物车</span> |
    <span @click="changeTab(3)">待办事项</span>
  </nav>

  <Base v-if="state.index === 1"/>
  <Shopping v-if="state.index === 2"/>
  <Todo v-if="state.index === 3"/>
</template>

<script setup>
import Base from './components/base.vue'
import Shopping from './components/shopping.vue'
import Todo from './components/todo.vue'

import { reactive } from 'vue'

let state = reactive({
  index: 1
})
const changeTab = (i) => {
  console.log(i);
  state.index = i
}
</script>

<style lang="css">
*{
  text-align: center;
}
</style>