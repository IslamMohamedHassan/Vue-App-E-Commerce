<script>
    import AppNav from '@/components/global/AppNav.vue';
    import AppFooter from '@/components/global/AppFooter.vue';
    import CartDrawer from '@/components/global/CartDrawer.vue';
    import FixedNav from '@/components/global/FixedNav.vue';
    import ResponsiveNav from './ResponsiveNav.vue';
    export default{
        components:{
            AppNav,
            AppFooter,
            CartDrawer,
            FixedNav,
            ResponsiveNav

            
        },
        data(){
            return{
                windowWidth : window.innerWidth
            }
    },
    mounted(){
        this.windowWidth = window.innerWidth;
        window.onresize = () =>{
            this.windowWidth = window.innerWidth;
        }
    }
}
</script>

<template>
    <v-layout class="position-relative">
        <CartDrawer/>
        <AppNav v-show="windowWidth >= 900" />
        <FixedNav v-show=" windowWidth >= 900" />
        <ResponsiveNav v-show="windowWidth < 900"/>
        <v-main :style="`padding-top: ${windowWidth > 900 ? '160px' : '25px'}`">
            <slot></slot>
        </v-main>
        <AppFooter/>
    </v-layout>
</template>

<style scoped>

</style>