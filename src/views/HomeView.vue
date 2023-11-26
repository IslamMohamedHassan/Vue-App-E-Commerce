<script>
import UpperBanner from '../components/home_page/UpperBanner.vue';
import Features from '@/components/home_page/Features.vue';
import TopOffers from '@/components/home_page/TopOffers.vue';
import Products from '../components/home_page/Products.vue';
import TopCategories from '../components/home_page/TopCategories.vue';
import NewProducts from '../components/home_page/NewProducts.vue';
import { productModule } from '../stores/products';
import { mapActions,mapState } from 'pinia';
import QualityFeatures from '../components/home_page/QualityFeatures.vue';


  export default{
    name:"HomeView",
    components:{
      UpperBanner,
      Features,
      TopOffers,
      Products,
      TopCategories,
      NewProducts,
      QualityFeatures
    },
    data(){
      return{

      }
    },
    computed:{
      ...mapState(productModule,["products","laptops","smartPhones","groceries","skinCare"])
    },
    methods:{
      ...mapActions(productModule,["getProducts"])
    },
    async mounted(){
      await this.getProducts();
    }
  }
</script>

<template>
    <UpperBanner/>
    <Features/>
    <TopOffers/>
    <Products :product = products title = "Flash Product"/>
    <TopCategories/>
    <NewProducts :product = laptops title = "New Product"/>
    <QualityFeatures/>
    <Products :product = smartPhones title = "Top Mobile Phones"/>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img class="w-100 pr-4" src="@/assets/images/band-left-cover.webp" alt="banner">
        </v-col>
        <v-col cols="6">
          <img class="w-100 pl-4" src="@/assets/images/band-right-cover.webp" alt="banner">
        </v-col>
      </v-row>
    </v-container>
    <Products :product = groceries title = "Groceries"/>
    <img class="w-100" src="@/assets/images/tv-banner.webp" alt="bannerImg">
    <Products :product = skinCare title = "Skin Care"/>



</template>

<style scoped>

</style>
