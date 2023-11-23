<script>
import UpperBanner from '../components/home_page/UpperBanner.vue';
import Features from '../components/home_page/Features.vue';
import TopOffers from '../components/home_page/TopOffers.vue';
import FlashProduct from '../components/home_page/FlashProduct.vue';
import { productModule } from '../stores/products';
import { mapActions,mapState } from 'pinia';


  export default{
    name:"HomeView",
    components:{
      UpperBanner,
      Features,
      TopOffers,
      FlashProduct
    },
    data(){
      return{

      }
    },
    computed:{
      ...mapState(productModule,["products"])
    },
    methods:{
      ...mapActions(productModule,["getProducts"])
    },
    async mounted(){
      await this.getProducts();
      // console.log(this.products);
    }
  }
</script>

<template>
    <UpperBanner/>
    <Features/>
    <TopOffers/>
    <FlashProduct :product = products />
</template>

<style scoped>

</style>
