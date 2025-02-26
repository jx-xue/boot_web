<script setup lang="ts">
    import Head from "@/components/Head.vue";
    import Nav from "@/components/Nav.vue";
</script>

<template>
    <div class="container-fluid">
        <Head></Head>
        <div class="container main-container d-flex">
                <div class="left">
                    <Nav/>
                </div>
                <div class="right">
                    <RouterView/>
                </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid {
    height: 100vh;
    padding: 0;
}
.main-container {
    padding: 0;
    margin: 0;
    height: calc(100vh - 56px);
}
.left {
    width: 200px;
    height: 100%;
    min-width: 151px;
}
.right {
    height: 100%;
}
</style>
