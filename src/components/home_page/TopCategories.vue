<template>
    <div class="top-cate">
        <div class="cyber-banner">
            <img class="w-100" src="../../assets/images/cyber-banner.webp" alt="banner">
        </div>
        
        <div class="categories pt-10">
            <div class="title d-flex justify-center align-center px-5 mb-3">
                <h3 class="text-center font-weight-bold text-h4 flex-grow-1">
                    Top Categories
                </h3>
                <a href="#" class="text-black">Shop All</a>
            </div>
            <v-container fluid>
                <v-row>
                    <v-col cols="2" v-for="(item,i) in categories" :key="i">
                        <v-card class="text-center pa-4" elevation="0">
                            <v-hover v-slot="{isHovering,props}">
                                <div v-bind="props" style="overflow: hidden; height: 200px; width: 100%; border-radius:50%">
                                    <img :style="`transition: 0.5s ease-in-out ;  scale: ${isHovering? 1.05 : 1 }; height:100%; width:100%; cursor:pointer`" :src="item.img" :alt="item.title" />
                                </div>
                            </v-hover>
                            <v-card-text>{{ item.title }}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Top-Categories",
        data() {
            return{
                categories: [
                {
                    title:"Mobile Phones",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263"
                },
                {
                    title:"Laptops & Tablets",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209"
                },
                {
                    title:"Televisions",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137"
                },
                {
                    title:"PCs & Accessories",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840"
                },
                {
                    title:"Audio & Video",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791"
                },
                {
                    title:"Gaming & Accessories",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635"
                },
                {
                    title:"Home Appliances",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882"
                },
                {
                    title:"Kitchen Appliances",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410"
                },
                {
                    title:"Cameras",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515"
                },
                {
                    title:"Consumables",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964"
                },
                {
                    title:"Smart Homes",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828"
                },
                {
                    title:"Accessories",
                    img:"https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367  "
                },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>