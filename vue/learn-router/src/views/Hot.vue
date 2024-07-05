<template>
    <div>
        Hot page --- {{ $route.query.id }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(route.params.id);

const props = defineProps({
    id: String
})
console.log(props.id);

</script>

<style lang="css" scoped>

</style>