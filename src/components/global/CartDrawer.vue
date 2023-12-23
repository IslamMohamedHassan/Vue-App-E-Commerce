<template>
        <v-navigation-drawer

        width="400"
        temporary
        v-model="drawer"
        location="right"
        class="pa-4 cart-drawer pr-0">
            <v-card class="" elevation ="0">
                <div class="d-flex justify-space-between align-center">
                <v-card-title class="px-0" style="font-size: 17px; font-weight: bold;">
                    Shopping Cart
                </v-card-title>
                <v-icon @click="drawer = false" class="mr-3">mdi-close</v-icon>
                </div>
            <v-card-items style="color: #666;"> {{ CartItems.length }} items </v-card-items>
            <v-card-text class="px-0" v-if="!CartItems.length">Free Shipping For All Orders Over $10000</v-card-text>
            <v-card-text class="px-0 text-center" v-if="!CartItems.length">Your Cart is Empty</v-card-text>
            <v-card-actions v-if="!CartItems.length">
            <v-btn style="
                margin: auto;
                text-transform: none;
                border-radius: 30px;
                border: 1px solid;
                border-color: rgb(199, 199, 199);"
                density="compact"
                variant="outline"
                @click="drawer = false"
                height="45">Continue Shopping</v-btn>
            </v-card-actions>
            </v-card>
            <v-card class="pa-0 mt-3" v-if="CartItems.length">
                <div class="bar-parent mt-6 position-relative mr-2">
                    <svg :style="`position: absolute;
                                bottom: 50%;
                                z-index: 1;
                                 left: calc(${parseInt((calcTotalPrice / 10000)*100 ) <= 100 ? parseInt((calcTotalPrice / 10000)*100 ): 100}% - 40px);
                                 transition: 0.15ms all ease-in-out;`"
                        class="icon-shipping-truck" width="40" fill="#f44336" viewBox="0 0 40.55 24"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="truck-body" d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"></path><path class="truck-body" d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"></path><path class="wheel" fill="white" d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"></path><path class="wheel" fill="white" d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"></path></g></g></svg>
                        <v-progress-linear 
                        color="red"
                        height="7"
                        class=""
                        :model-value="parseInt((calcTotalPrice / 10000)*100 ) <= 100 ? parseInt((calcTotalPrice / 10000)*100 ): 100"
                        striped>
                    </v-progress-linear>
                </div>
                <v-card-text v-if="CartItems.length && 10000 -calcTotalPrice > 0 " class="px-0 pt-2">Only <strong> {{ 10000 - calcTotalPrice }} </strong> away from Free Shipping</v-card-text>
                <v-card-text v-if="CartItems.length && 10000 -calcTotalPrice <= 0 " class="px-0 pt-2">Your Order Now Is Included Free Shipping</v-card-text>
                <v-container class="pl-0 ">
                    <v-row v-for="(item,i) in CartItems" :key="i" class="align-start mb-3">
                        <v-col cols ="5">
                            <img :src="item.thumbnail" style="height:150px" class="w-100" alt="img">
                        </v-col>
                        <v-col cols ="7">
                            <v-card-title 
                            class="px-0"
                            style="white-space: pre-wrap;
                            font-size: 14px;
                            line-height: 1.2;">
                                {{ item.title }} - {{ item.category }}
                            </v-card-title>
                            <v-card-text class="px-0">Category: {{ item.category }}</v-card-text>
                            <v-card-text class="ma-0 pb-1 px-0 pt-2" style="font-size: 20px;">${{Math.ceil(item.price  -  (item.price * item.discountPercentage / 100)) * item.quantity }}</v-card-text>
                            <div class="card-footer d-flex justify-space-between align-center">
                                <div class="px-1 d-flex align-center" style="border: 1px solid #6a6a6a;border-radius: 30px; width: fit-content;">
                                    <v-icon style="color: #4c4c4c; font-size: 18px;" @click="item.quantity++">mdi-plus</v-icon>
                                    <input style=" font-size: 18px;width: 60px; height: 35px;border: none; outline: none; text-align: center;" type="number" v-model="item.quantity"  min="1"/>
                                    <v-icon style="color: #4c4c4c; font-size: 18px;" @click="(item.quantity !== 1 ? item.quantity-- : item.quantity)">mdi-minus</v-icon>
                                </div>
                                <div>
                                    <v-icon @click="deleteItem(item.id)" style="cursor: pointer;">mdi-close</v-icon>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions style="gap: 15px;" class="flex-column" v-if="CartItems.length">
            <v-btn style="
                width: 75%;
                margin: auto;
                text-transform: none;
                border-radius: 30px;"
                density="compact"
                variant="elevated"
                elevation="0"
                color="blue"
                height="45">Check Out</v-btn>
            <v-btn style="
                width: 75%;
                margin: auto;
                text-transform: none;
                border-radius: 30px;
                border: 1px solid;
                border-color: rgb(199, 199, 199);"
                density="compact"
                variant="outline"
                height="45">View Cart</v-btn>
            </v-card-actions>
            </v-card>
        </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { cartStore } from '../../stores/cart';


    export default{
        inject:["Emitter"],
        data(){
            return{
                drawer : false,
            }
        },
        computed:{
            ...mapState(cartStore,["CartItems"]),
            calcTotalPrice(){
                let totalPrice = 0;
                this.CartItems.forEach((product)=>{
                    totalPrice += Math.ceil(product.price  -  (product.price * product.discountPercentage / 100)) * product.quantity ;
                })
                return totalPrice;
            }
        },  
        methods:{
            ...mapActions(cartStore,["deleteItem","getCartItems"])
        },
     
        mounted(){
            this.Emitter.on("openCart", ()=>{
             return this.drawer = !this.drawer;
            })
            this.getCartItems();
            }
        }
</script>

<style lang="scss">
    .v-navigation-drawer__content{
        &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: #333;
    }

    &::-webkit-scrollbar-track {
        width: 5px;
        background-color: #f0f0f0;
    }
    }
</style>