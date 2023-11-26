<template>
    <div class="banner position-relative">
        <img srcset="//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=375 375w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=740 740w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=750 750w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=1100 1100w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=1370 1370w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=1500 1500w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=1770 1770w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=1780 1780w,//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=1880 1880w," sizes="100vw" src="//new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&amp;width=750" alt="Slider-image" class=" d-block w-100" width="1920" height="560">
        <div class="parent position-absolute">
            <v-container>
                <div class="text-white banner-info">
                    <h3>
                        <span class="span-text">Huge Saving </span>
                        on <br> UHD Televisions
                    </h3>
                    <p>Sale Up to 70% off on selected items*</p>
                    <v-btn density="compact"  rounded = "xl" variant="outlined" size="x-large" class="px-10">Shop Now</v-btn>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

    .banner{

            .parent{
                z-index: 10;
                top: 15%;
                left: 10%;
            }
        }
        h3{
            font-size: 50px !important;
            font-weight: 900;
            span{
                color: rgb(115, 217, 254);
                font-weight:900;
            }
        }
        p{
            font-size: 20px;
            margin: 40px 0;
        }
    

</style>