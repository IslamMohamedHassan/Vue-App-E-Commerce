<template>
    <div class="product-category-page">
        <v-container fluid>
            <v-lazy>
            <v-card :loading="loading" class="pa-3" elevation="0">
                <v-row  v-if="loading" class="product-category-page-row">
                <v-col cols="12" sm="6" md="4" lg="3"  class="px-12 py-7  my-2" v-for="num in 4" :key="num" max-width="374" height="250">
                    <VSkeletonLoader  type="image, article, paragraph, button"></VSkeletonLoader>
                </v-col>
            </v-row>
            <v-row v-if="!loading" class="product-category-page-row">
                <v-col v-for="(item, i) in productsOfCategory" :key="i" cols="12" sm="6" md="4" lg="3">
                 <v-card  @click="$router.push(`/product/${item.id}`)" elevation="0" class="mx-auto my-2" max-width="374" style="cursor: pointer;">
                    <v-hover v-slot="{isHovering,props}">   
                        <div style="height:250px;  overflow:hidden;" >
                            <v-img v-bind="props" cover  :style="`transition: 1s ease-in-out ;  scale: ${isHovering? 1.05 : 1 }; height:100%;`" :src="(showenItem[item.title]? showenItem[item.title]:item.thumbnail) "></v-img>
                        </div>
                    </v-hover> 
                        <v-card-item>
                            <v-card-title>{{ item?.title }}</v-card-title>
                            <v-card-subtitle>
                                <span class="me-1">{{ item?.description }}</span>
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
                            <v-btn class="option-btn my-3 mx-auto px-7" color="deep-black-lighten-2" rounded="xl" variant="outlined">
                                Choose Option
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            </v-card>
        </v-lazy>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { productModule } from '../stores/products';
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs';


productModule
    export default {
        name:'ProductCategory',
        components:{VSkeletonLoader},
        data(){
            return{
                showenItem:{},
                loading:false
            }
        },

        computed:{
            ...mapState(productModule, ['productsOfCategory'])
        },
        methods:{
            ...mapActions(productModule, ['getProductsOfCategories']),
        },
        async mounted(){
            // document.documentElement.scrollTo(0,0)
            this.loading = true
            await this.getProductsOfCategories(this.$route.params.category)
            this.loading = false

        },
        watch:{
            async $route(){
                // document.documentElement.scrollTo(0,0)
                this.loading = true
                await this.getProductsOfCategories(this.$route.params.category)
                this.loading = false
            },
        }
    }
    
</script>

<style lang="scss" scoped>

.product-category-page{
            .product-category-page-row{
                .option-btn{
                    width: 100%;
                }
            }
        }
    
    @media(max-width: 1220px){
        .product-category-page{
            .product-category-page-row{
                margin-top: 20px !important;
            }
        }
    }
    @media(max-width: 900px){
        .product-category-page{
            .product-category-page-row{
                margin-top: 45px !important;
            }
        }
    }
</style>