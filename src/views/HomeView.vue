<script>
import UpperBanner from '../components/home_page/UpperBanner.vue';
import Features from '../components/home_page/Features.vue';
import TopOffers from '../components/home_page/TopOffers.vue';


  export default{
    name:"HomeView",
    components:{
      UpperBanner,
      Features,
      TopOffers
      
      
    }
  }
</script>

<template>
    <UpperBanner/>
    <Features/>
    <TopOffers/>
</template>

<style scoped>

</style>
