<template>
    <div>
        <app-header></app-header>
        <div>{{ name }}</div>
        <compFooter/>
    </div>
</template>

<script>
    import compFooter from './Components/Header-footer/Footer.vue';

    export default {
        data() {
            return {
                name: 'John',
            }
        },
        components: {
            compFooter,
        },
    }
</script>

<style></style>
