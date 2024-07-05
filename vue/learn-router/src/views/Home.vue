<template>
    <div>
        <h2>home page</h2>
        <button @click="goHot">去沸点</button>
    </div>
</template>

<script setup>
// import router from '../router'
import { useRouter } from 'vue-router'
const router = useRouter()

const goHot = () => {
    console.log(router)
    // router.push('/hot')
    // router.replace('/hot')
    // router.push({ path: '/hot', query: { id: 123}})
    router.push({ name: 'hot', params: { id: 123}}
    )
}
</script>

<style lang="css" scoped>

</style>