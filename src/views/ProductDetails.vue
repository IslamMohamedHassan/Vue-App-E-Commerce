<template>
    <div class="Product-Details">
        <v-container>
            <v-row class="align-center">
                <v-col class="d-flex  justify-center" cols="12" sm="7" md="7">
                    <div>
                        <img class="d-block" :src="specificProduct.thumbnail" alt="product-img">
                        <v-tabs height="220"  center-active>
                        <v-tab class="mx-3"  v-for="(img,i) in specificProduct.images" :key="i">
                            <img style="width: 100px; height: 200px;" :src="img" alt="product-img">
                        </v-tab>
                    </v-tabs>
                    </div>

                </v-col>
                <v-col class="d-flex justify-start" cols="12" sm="5" md="5"> 
                    <div>
                    <v-card elevation="0" class="mx-auto my-2" style="cursor: pointer;">
                        <v-card-item>
                            <v-card-title>
                                {{ specificProduct?.title }}
                            </v-card-title>
                            <v-card-text class="w-75 py-2 px-0">
                                <p class="d-inline-block">{{ specificProduct?.description }} <v-icon class="" color="error" icon="mdi-fire-circle" size="small"></v-icon></p>
                                
                            </v-card-text>
                        </v-card-item>
                        <v-card-text class="pb-0">
                            <v-row  class="mx-0 py-2 align-center">
                                <v-rating :model-value="specificProduct.rating" color="amber" density="compact" half-increments readonly
                                    size="small"></v-rating>
                                <div class="text-grey ms-4">
                                    {{ specificProduct.rating }}
                                </div>
                            </v-row>
                            <div class="mt-3">
                                <span class="font-weight-bold">Brand : </span>
                                <span>{{specificProduct.brand}}</span>
                            </div>
                            <div class="mt-3">
                                <span class="font-weight-bold">Category : </span>
                                <span>{{specificProduct.category}}</span>
                            </div>
                            <div class="mt-3">
                                <span class="font-weight-bold">Stock : </span>
                                <span>{{specificProduct.stock}}</span>
                            </div>
                            <div class="mt-3">
                                <span  style="font-size: 20px; color: rgb(166, 45, 45);" class="font-weight-bold ">${{Math.ceil(specificProduct.price  -  (specificProduct.price * specificProduct.discountPercentage / 100)) }}</span>
                            </div>
                            <div class="my-3 text-subtitle-1">
                                <span class="font-weight-bold d-block">Quantity :</span>
                            </div>
                            <div class="px-1 d-flex align-center" style="border: 1px solid #6a6a6a;border-radius: 30px; width: fit-content;">
                                <v-icon style="color: #4c4c4c;" @click="quantity++">mdi-plus</v-icon>
                                <input style=" font-size: 18px;width: 60px; height: 35px;border: none; outline: none; text-align: center;" type="number" v-model="quantity"  min="1"/>
                                <v-icon style="color: #4c4c4c;" @click="(quantity !== 1 ? quantity-- : quantity)">mdi-minus</v-icon>
                            </div>
                            <div class="my-3">
                                <span class="font-weight-bold">Subtotal : </span><span  style="font-size: 14px;" class="font-weight-bold">${{Math.ceil(specificProduct.price  -  (specificProduct.price * specificProduct.discountPercentage / 100)) }}</span>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn style="height: 45px; background-color: #202020;"  class="option-btn my-3 mx-auto px-7 w-100 text-white" color="deep-black-lighten-2" rounded="xl" variant="outlined">
                               <span style="font-weight: bold; font-size: 16px;">Choose Option</span> 
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { productModule } from '../stores/products';


    export default {
        name: "Product-Details",
        data(){
            return{
                quantity:1,
            }
        },
        computed:{
            ...mapState(productModule , ['specificProduct']),
        },
        methods:{
            ...mapActions(productModule ,['getSpecificProduct'])
        },
    async beforeMount(){
        await this.getSpecificProduct(this.$route.params.id)
        console.log(this.specificProduct);
        }
    }


</script>

<style lang="scss" scoped>

</style>