<template>
    <div id="app">
        <v-header></v-header>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import header from './components/header/header.vue';
    import search from './components/search/search.vue';
    import widgetHeader from './components/widget-header/widget-header.vue';

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'v-header': header
        }
    }
</script>

<style lang="scss">
    @import './assets/css/reset.css';
</style>
