<template>
    <div class="why-shop-with-us text-white py-10">
        <v-container>
            <div>
                <h2><span>Why shop</span> with us </h2>
            </div>
            <v-row class="pb-5 pt-12">
            <v-hover v-slot="{isHovering,props}">
            <v-col cols="3" v-bind="props">
                <div :style="`transition: 0.3s ease-in-out ;  transform: translateY(${isHovering ? '-15px' : '0px'});`">
                <div class="img-parent">
                    <img src="@\assets\images\free-shipping.png" alt="free-shipping">
                </div>
                <div class="cont-parent">
                    <h3>Free Shipping On First Order</h3>
                    <p>Praesent suscipit mattis facilisis.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
            </v-col>
         </v-hover>
         <v-hover v-slot="{isHovering,props}">
            <v-col cols="3" v-bind="props">
                <div :style="`transition: 0.3s ease-in-out ;  transform: translateY(${isHovering ? '-15px' : '0px'});`">
                <div class="img-parent">
                    <img src="@\assets\images\weekly-flash-sales.png" alt="free-shipping">
                </div>
                <div class="cont-parent">
                    <h3>Weekly Flash Sale</h3>
                    <p>Praesent suscipit mattis facilisis.</p>
                    <a href="#">Learn more</a>
                </div>
                </div>
            </v-col>
            </v-hover>

             <v-hover v-slot="{isHovering,props}">
            <v-col cols="3" v-bind="props">
                <div :style="`transition: 0.3s ease-in-out ;  transform: translateY(${isHovering ? '-15px' : '0px'});`">
                <div class="img-parent">
                    <img src="@\assets\images\discount.png" alt="free-shipping">
                </div>
                <div class="cont-parent">
                    <h3>Anual payment discount </h3>
                    <p>Praesent suscipit mattis facilisis.</p>
                    <a href="#">Learn more</a>
                </div>
                </div>
            </v-col>
            </v-hover>
            <v-hover v-slot="{isHovering,props}">
            <v-col cols="3" v-bind="props">
                <div :style="`transition: 0.3s ease-in-out ;  transform: translateY(${isHovering ? '-15px' : '0px'});`">
                <div class="img-parent">
                    <img src="@\assets\images\cash-back.png" alt="free-shipping">
                </div>
                <div class="cont-parent">
                    <h3>Cashback Reward Program</h3>
                    <p>Praesent suscipit mattis facilisis.</p>
                    <a href="#">Learn more</a>
                </div>
                </div>
            </v-col>
            </v-hover>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .why-shop-with-us{
        background-image: url(../../assets/images/why-shop-with-us-banner.webp);
        background-repeat: repeat;
        background-size: cover;
        h2{
            font-size: 40px;
            text-align: center;
            font-weight: bolder;
            padding: 15px 0px;
            span{
                color: aqua;
                font-weight: bolder;
            }
        }
        .img-parent{
            text-align: center;
        }
        .cont-parent{
            text-align: center;
            margin-bottom: 30px;
            h3{
                font-size: 24px;
                font-weight: bold;
            }
            p{
                padding: 10px 0;
            }
        }
        a{
            color: white;
            text-align: center;
            display: block;
        }
    }
</style>