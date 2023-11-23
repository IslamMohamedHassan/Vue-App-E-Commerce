<script>
    import AppNav from '@/components/global/AppNav.vue';
    import AppFooter from '@/components/global/AppFooter.vue';
    import CartDrawer from '@/components/global/CartDrawer.vue';
    import FixedNav from './FixedNav.vue';
    
    export default{
        components:{
            AppNav,
            AppFooter,
            CartDrawer,
            FixedNav
        }
    }
</script>

<template>
    <v-layout class="position-relative">
        <CartDrawer/>
        <AppNav/>
        <FixedNav/>
        <v-main style="padding-top: 162px;">
            <slot></slot>
        </v-main>

        <AppFooter/>
    </v-layout>
</template>

<style scoped>

</style>