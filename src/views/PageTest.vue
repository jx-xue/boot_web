<script setup lang="ts">
    import axios from "axios";
    import {useNavigationStore} from "@/stores/navigation.ts";
    import {onBeforeMount} from "vue";
    onBeforeMount(() => {
        axios.get('/page.json').then((res) => {
            let navigationStore = useNavigationStore();
            navigationStore.left = res.data;
        })
    })
</script>

<template>
    <h1>页面测试</h1>
</template>

<style scoped lang="scss">

</style>