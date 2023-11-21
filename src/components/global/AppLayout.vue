<script>
    import AppNav from '@/components/global/AppNav.vue';
    import AppFooter from '@/components/global/AppFooter.vue';
    import CartDrawer from '@/components/global/CartDrawer.vue';
    export default{
        components:{
            AppNav,
            AppFooter,
            CartDrawer
        }
    }
</script>

<template>
    <v-layout>
        <CartDrawer/>
        <AppNav/>
        <v-main>
            <slot></slot>
        </v-main>

        <AppFooter/>
    </v-layout>
</template>