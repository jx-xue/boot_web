<script setup lang="ts">
    import Head from "@/components/Head.vue";
</script>

<template>
    <div class="container-fluid">
        <Head></Head>
        <RouterView/>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    height: 100vh;
}
</style>
