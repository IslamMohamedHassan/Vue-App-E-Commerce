<template>
    <div class="banner">
        <div class="parent">
            <img class="banner-img" src="@/assets/images/banner-bg.jpg" alt="upper-banner" />
            <div class="text-white banner-info">
                <h3>
                    <span class="span-text">Huge Saving </span>
                    on <br> UHD Televisions
                </h3>
                <p>Sale Up to 70% off on selected items*</p>
                <v-btn density="compact" rounded="xl" variant="outlined" size="x-large" class="px-10">Shop Now</v-btn>
            </div>
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
            height: 650px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
            }

            .banner-info {
                position: absolute;
                top: 45%;
                left: 25%;
                transform: translate(-50%, -50%);
            }
        }

        h3 {
            font-size: 50px;
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
    @media (max-width: 1600px) {
        .banner {
        .parent {
            height: 450px;
            .banner-info {
                position: absolute;
                top: 45%;
                left: 20%;
                transform: translate(-50%, -50%);
            }
        }

        h3 {
            font-size: 40px;
            font-weight: 900;

            span {
                color: rgb(115, 217, 254);
                font-weight: 900;
            }
        }
        p {
            font-size: 18px;
            margin: 30px 0;
        }
    }
    }
    @media (max-width: 990px) {
        .banner {
        .parent {
            max-height: 300px;
            margin-top: 25px;
            .banner-info {
                position: absolute;
                top: 45%;
                left: 25%;
                transform: translate(-50%, -50%);
            }
            .banner-img{
                margin-top: 25px;
            }
        }

        h3 {
            font-size: 30px;
            font-weight: 700;

            span {
                color: rgb(115, 217, 254);
                font-weight: 700;
            }
        }
        p {
            font-size: 16px;
            margin: 15px 0;
        }
    }
    }
    @media (max-width: 900px) {
        .banner {
        .parent {
            max-height: 250px;
            margin-top: 35px;
            .banner-img{
                margin-top: 60px;
            }
        }
    }
}
    @media (max-width: 768px) {
        .banner {
        .parent {
            max-height: 250px;
            margin-top: 35px;
            .banner-img{
                margin-top: 60px;
            }
            .banner-info {
                position: absolute;
                top: 45%;
                left: 25%;
                transform: translate(-50%, -50%);
            }
        }

        h3 {
            font-size: 26px;
            font-weight: 900;

            span {
                color: rgb(115, 217, 254);
                font-weight: 700;
            }
        }
        p {
            font-size: 14px;
            margin: 10px 0;
            color: #fff;


        }
        button{
            width: 120px;
            height: 40px;
            font-size: 14px;
            font-weight: 700;
        }
    }
    }
    @media (max-width: 600px) {
        .banner {
        .parent {
            max-height: 250px;
            margin-top: 60px;
            .banner-info {
                position: absolute;
                top: 45%;
                left: 40%;
                transform: translate(-50%, -50%);
            }
        }

        h3 {
            font-size: 22px;
            font-weight: 700;

            span {
                color: rgb(115, 217, 254);
                font-weight: 700;
            }
        }
        p {
            width: 70%;
            font-size: 16px;
            margin: 5px 0;
            font-weight: 700;

        }
        button{
            width: 100px;
            height: 30px;
            font-size: 12px;
        }
    }
    }
</style>