<!-- <template>
    <img v-bind:src="pic" alt="">
    <a :href="url">去百度</a>

    <h2 @click="handle" :class="name">唐总在睡觉觉</h2>
    <h2 @click="handle" :class="{'red': active}">唐总在睡觉觉</h2>
    <h2 @click="handle" :class="[active ? 'red' : 'green']">唐总在睡觉觉</h2>
    <h2 @click="handle" :class="['red', 'green']">唐总在睡觉觉</h2>

    <input type="text" @input="onChange" :value="val">
    <h4 @click="changVal">{{val}}</h4>
</template>

<script setup>
import { ref } from 'vue'
const pic = 'https://a.bd66s.com/img/7d0bf2f0-f4f6-11ec-925d-2feceb446d33.jpg'
const url = 'http://www.baidu.com/'

let name = ref('')
let active = ref(false)
const handle = () => {
    active.value = !active.value
}

let val = ref('hello')
const onChange = (e) => {
    console.log('onChange', e.target.value);
    val.value = e.target.value
}

const changVal = () => {
    val.value += 'o'
}
</script>

<style lang="css" scoped>
img {
    width: 200px;
}
.red {
    color: red;
}
.green {
    color: green;
}
</style> -->

<template>
    <div>
        <h2 @click="handle">{{msg}}</h2>
        <input type="text" v-model="msg">
    </div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref('hello')
const handle = () => {
    msg.value += 'h'
}
</script>

<style lang="scss" scoped>

</style>