<template>
    <div class="new-products pt-12">
        <v-container fluid >
 
            <v-row class="px-8">
                <v-col cols="7">
                    <div class="title mb-10  d-flex align-center justify-space-between">
                        <h2 style="font-weight: 900; font-size: 30px;">{{ title }}</h2>
                    </div>
                    <div class="d-flex ga-1" v-if="!product.length">
                        <VSkeletonLoader style="width: 30%;"  v-for="num in 3" :key="num"  type="image, article, paragraph, button"></VSkeletonLoader>
                    </div>
                    <swiper :pagination="{ e1: '.swiper-pagination', clickable: true }"
                        :scrollbar="{ el: '.swiper-scrollbar' }" :modules="modules" :allow-touch-move="true"
                        :space-between="20" :slides-per-view="3" 
                        :mousewheel="{ enable: true }" class='pb-13'>

                        <swiper-slide v-for="(item, i) in product" :key="i">
                            <v-card elevation="0" class="mx-auto my-2" max-width="374" style="cursor: pointer;">
                                <v-hover v-slot="{ isHovering, props }">
                                    <div style="height:250px;  overflow:hidden;">
                                        <v-img v-bind="props" cover
                                            :style="`transition: 1s ease-in-out ;  scale: ${isHovering ? 1.05 : 1}; height:100%;`"
                                            :src="(showenItem[item.title] ? showenItem[item.title] : item.thumbnail)"></v-img>
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
                                        <v-rating :model-value="item.rating" color="amber" density="compact" half-increments
                                            readonly size="small"></v-rating>

                                        <div class="text-grey ms-4">
                                            {{ item.rating }}
                                        </div>
                                    </v-row>

                                    <div class="my-3 text-subtitle-1">
                                        <del><span>${{ item.price }}</span></del> From <span style="font-size: 17px;"
                                            class="font-weight-bold text-red-darken-2">${{ Math.ceil(item.price - (item.price
                                                * item.discountPercentage / 100)) }}</span>
                                    </div>
                                </v-card-text>

                                <v-btn-toggle class="my-5" v-model="showenItem[item.title]">
                                    <v-btn v-for="(img, i) in item.images" :key="i" :value="img" size="x-small">
                                        <img style="border-radius: 50%;border: 1px solid lightgray; width: 35px;height: 35px; cursor: pointer;"
                                            :src="img" alt="altImages">
                                    </v-btn>

                                </v-btn-toggle>
                                <v-card-actions class="d-block">
                                    <v-btn style="width: 90%;" color="deep-black-lighten-2" rounded="xl"
                                        variant="tonal">
                                        Choose Option
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </swiper-slide>

                        <div class="swiper-pagination"></div>
                        <div class="swiper-scrollbar"></div>

                    </swiper>
                </v-col>
                <v-col cols="5">
                    <img style="width: 100%; height: 700px;" src="../../assets/images/vr-banner.webp" alt="vr-image">
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination, Scrollbar, Autoplay } from "swiper";
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs';

export default {
    name: "Flash-Product",
    data() {
        return {
            showenItem: {},
            isMouseOverSwiper: false,
            swiperInstance: null,
        }
    },
    setup() {
        return {
            modules: [Pagination, Scrollbar, Autoplay],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        VSkeletonLoader
    },

    props: {
        product: {
            type: Array,
        },
        title: {
            type: String,
        },
    },

}

</script>

<style lang="scss" scoped></style>