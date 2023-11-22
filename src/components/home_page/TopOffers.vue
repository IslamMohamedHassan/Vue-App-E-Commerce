<template>
    <div class="top-offers bg-grey-lighten-3">
        <v-container fluid>
            <v-row>
                <v-col cols="4" class="blue-grey-lighten-3">
                    <div class="pa-lg-3 pa-2">
                    <v-hover v-slot="{isHovering,props}">
                        <div  style="overflow:hidden; cursor: pointer;"   v-bind="props" class="img-wrapper">
                            <img class="img" :style="`scale : ${isHovering? 1.1:1} `" src="../../assets/images/playstations.webp" alt="play-stations">
                        </div>
                    </v-hover>
                </div>
                </v-col>
                <v-col cols="4" class="blue-grey-lighten-3 ">
                    <div class="pa-lg-3 pa-2">
                    <v-hover v-slot="{isHovering,props}">
                        <div  style="overflow:hidden; cursor: pointer;"   v-bind="props" class="img-wrapper">
                            <img class="img" :style="`scale : ${isHovering? 1.1:1} `" src="../../assets/images/headset.webp" alt="play-stations">
                        </div>
                    </v-hover>
                </div>
                </v-col>
                <v-col cols="4" class="blue-grey-lighten-3">
                    <div class="pa-lg-3 pa-2">
                    <v-hover v-slot="{isHovering,props}">
                        <div  style="overflow:hidden; cursor: pointer;"   v-bind="props" class="img-wrapper">
                            <img class="img" :style="`scale : ${isHovering? 1.05:1} `" src="../../assets/images/chairs.webp" alt="play-stations">
                        </div>
                    </v-hover>
                </div>
                </v-col>
                <v-col cols="6" class="blue-grey-lighten-3">
                    <div class="pa-lg-3 pa-2">
                    <v-hover v-slot="{isHovering,props}">
                        <div  style="overflow:hidden; cursor: pointer;"   v-bind="props" class="img-wrapper">
                            <img class="img" :style="`scale : ${isHovering? 1.05:1} `" src="../../assets/images/iphones.webp" alt="play-stations">
                        </div>
                    </v-hover>
                </div>
                </v-col>
                <v-col cols="6" class="blue-grey-lighten-3">
                    <div class="pa-lg-3 pa-2">
                    <v-hover v-slot="{isHovering,props}">
                        <div  style="overflow:hidden; cursor: pointer;"   v-bind="props" class="img-wrapper">
                            <img class="img" :style="`scale : ${isHovering? 1.05:1} `" src="../../assets/images/laptops.webp" alt="play-stations">
                        </div>
                    </v-hover>
                </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "TopOffers",

}
</script>

<style lang="scss" scoped>
    .img-wrapper{
        width: 100%;
        height: 100%;
        border-radius: 30px;
        overflow: hidden;
        
        .img{
        width: 100%;
        height: 100%;
        display: block;
        transition: 1s ease-in-out;
        border-radius: 30px;
        cursor: pointer;

        }
    }
</style>