<template>
    <div class="product-swiper" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <v-container fluid>
            <div class="title mb-10  d-flex align-center justify-space-between">
                        <h2 style="font-weight: 900; font-size: 30px;">{{ title }}</h2>
            </div>
            <v-row>
                <v-col cols="3" sm="6" md="3"  class="px-12 py-7  my-2" v-for="num in 4" :key="num" max-width="374" height="250" v-if="!product.length">
                    <VSkeletonLoader  type="image, article, paragraph, button"></VSkeletonLoader>
                </v-col>
            </v-row>
            <swiper
            :pagination="{ e1 :'.swiper-pagination' , clickable : true }"
            :scrollbar="{el: '.swiper-scrollbar'}"
            :modules="modules"
            :allow-touch-move="true"
            :space-between="35"
            navigation
            :slides-per-view="4"
            :autoplay="{ delay: 2000, disableOnInteraction: false}"
            :mousewheel="{ enable: true }"
            class='pb-13'
            @swiper="onSwiper">

            <swiper-slide  v-for="(item, i) in product" :key="i" cols="3" sm="6" md="3">
                 <v-card elevation="0" class="mx-auto my-2" max-width="374" style="cursor: pointer;">
                    <v-hover v-slot="{isHovering,props}">   
                        <div style="height:250px;  overflow:hidden;" >
                            <v-img v-bind="props" cover  :style="`transition: 1s ease-in-out ;  scale: ${isHovering? 1.05 : 1 }; height:100%;`" :src="(showenItem[item.title]? showenItem[item.title]:item.thumbnail) "></v-img>
                        </div>
                    </v-hover> 
                        <v-card-item>
                            <v-card-title>{{ item.title }}</v-card-title>
                            <v-card-subtitle>
                                <span class="me-1">{{ item.description }}</span>
                                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                            </v-card-subtitle>
                        </v-card-item>
                        <v-card-text class="pb-0">
                            <v-row align="center" class="mx-0">
                                <v-rating :model-value="item.rating" color="amber" density="compact" half-increments readonly
                                    size="small"></v-rating>

                                <div class="text-grey ms-4">
                                    {{ item.rating }}
                                </div>
                            </v-row>

                            <div class="my-3 text-subtitle-1">
                                <del><span>${{ item.price }}</span></del> From <span  style="font-size: 17px;" class="font-weight-bold text-red-darken-2">${{Math.ceil(item.price  -  (item.price * item.discountPercentage / 100)) }}</span>
                            </div>
                        </v-card-text>

                        <v-btn-toggle v-model="showenItem[item.title]">
                                <v-btn  v-for="(img,i) in item.images" :key="i" :value="img" size="x-small">
                                        <img  style="border-radius: 50%;border: 1px solid lightgray; width: 35px;height: 35px; cursor: pointer;" :src="img" alt="altImages">
                                </v-btn>
                               
                         </v-btn-toggle >
                        <v-card-actions>
                            <v-btn class="my-3 mx-auto px-7" color="deep-black-lighten-2" rounded="xl" variant="outlined">
                                Choose Option
                            </v-btn>
                        </v-card-actions>
                    </v-card>
            </swiper-slide>

                <div class="swiper-pagination"></div>
                <div class="swiper-scrollbar"></div> 

            </swiper>
        </v-container>
    </div>
</template>

<script>
import {Swiper, SwiperSlide } from 'vue-awesome-swiper'
import {Navigation,Pagination,Scrollbar,Autoplay } from "swiper";
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs';


export default {
    name: "Flash-Product",
    data(){
        return{
            showenItem : {},
            isMouseOverSwiper : false,
            swiperInstance: null,
        }
    },
    setup(){
        return{
            modules: [Navigation, Pagination  ,Scrollbar ,Autoplay],
        }
    },
    components:{
        Swiper,
        SwiperSlide,
        VSkeletonLoader
    },
    
    props: {
        product: {
            type: Array,
        },
        title: {
            type:String
        }
    },
    methods: {
    handleMouseEnter() {
      this.isMouseOverSwiper = true;
      this.pauseAutoplay();
    },
    handleMouseLeave() {
      this.isMouseOverSwiper = false;
      this.resumeAutoplay();
    },
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    pauseAutoplay() {
      if (this.swiperInstance) {
        this.swiperInstance.autoplay.stop();
      }
    },
    resumeAutoplay() {
      if (this.swiperInstance && !this.swiperInstance.isBeginning) {
        this.swiperInstance.autoplay.start();
      }
    },
}
}

</script>
 <style lang="scss">
 .product-swiper{
     .swiper-button-prev{
         border: 2px solid rgb(69, 67, 67);
         width: 40px;
         height: 40px;
         left: 5px;
         top:52%;
        //  transform: translate(-50%, -50%);
         border-radius: 50%;
         &::after{
             color:  rgb(69, 67, 67);
             font-size: 20px !important;
             font-weight: bold;

      }
     }
     .swiper-button-next{
         border: 2px solid rgb(69, 67, 67);
         width: 40px;
         height: 40px;
         right: 5px;
         border-radius: 50%;
         &::after{
             color:  rgb(69, 67, 67);
             font-size: 20px !important;
             font-weight: bold;

      }
     }
 
 }
</style>