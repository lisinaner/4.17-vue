<template>
    <div id="app">
        <one></one>
    </div>
</template>

<script>
    import one from "./view/one.vue"

    export default {
        name: 'App',
        components: {
            one
        }
    }
</script>

<style>
    #app {
        font-family: "Atkinson Hyperlegible";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
