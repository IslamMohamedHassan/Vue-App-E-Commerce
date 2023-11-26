<template>
    <div class="banner">
        <div class="parent">
            <v-container fluid>
                <v-row class="d-flex justify-start">
                    <v-col cols="6" class="d-flex justify-center">
                        <div class="text-white banner-info">
                            <h3>
                                <span class="span-text">Huge Saving </span>
                                on <br> UHD Televisions
                            </h3>
                            <p>Sale Up to 70% off on selected items*</p>
                            <v-btn density="compact" rounded="xl" variant="outlined" size="x-large" class="px-10">Shop Now</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .banner {
        .parent {
            height: 0;
            padding-top: 30%;
            background-image: url('../../assets/images/banner-bg.jpg');
            background-size: cover;
            background-position: top right;
            position: relative;

            .banner-info {
                position: absolute;
                top: 50%;
                left: 25%;
                transform: translate(-50%, -50%);
            }
        }

        h3 {
            font-size: 46px;
            font-weight: 900;

            span {
                color: rgb(115, 217, 254);
                font-weight: 900;
            }
        }

        p {
            font-size: 20px;
            margin: 45px 0;
        }
    }
</style>