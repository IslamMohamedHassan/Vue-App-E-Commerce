<template>
    <nav>
    <v-app-bar color="#092999" height="fit-content">
        <v-container fluid>
            <v-row class="align-center">
                <v-col cols="2">
                    <img style="cursor: pointer;" @click="$router.push({name:'home'})" src="@/assets/images/logo.png" alt="" />
                </v-col>
                <v-col cols="9">

                    <ul class="d-flex justify-center">
                        <li class="pa-2 " v-for="(link, i) in category" :key="i">
                            <RouterLink style="text-decoration: none; "
                                :to="{ name: 'category-page', params: { category: link.route } }">{{ link.title }}</RouterLink>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="1" class="d-flex justify-end ms-auto">
                    <div>
                        <v-icon style="font-size: 40px; cursor: pointer;" color="#f7a833">mdi-magnify</v-icon>
                    </div>

                    <div class="d-flex flex-column align-center" style=" cursor:pointer" @click="openCart">
                        <v-badge location="top right" :content="CartItems.length" offset-x="-16" color="#1083ff">
                        </v-badge>
                        <div>
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-wishlist d-block" style="width: 35px; fill: #f7a833">
                                <path class="path1"
                                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
                                </path>
                                <path class="path2"
                                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
                                </path>
                                <path class="path3"
                                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </v-col>

            </v-row>
        </v-container>
    </v-app-bar>
</nav>
</template>

<script>
import { mapState } from 'pinia'
import { productModule } from '../../stores/products'
import { cartStore } from '../../stores/cart'

export default {
    name: "FixedNav",
    data() {
        return {
            category: [],
            }
    },
    computed:{
    ...mapState(productModule,['categories']),
    ...mapState(cartStore,['CartItems'])

  },
    inject: ['Emitter'],
    methods: {
        openCart() {
            this.Emitter.emit('openCart')
        }
    },
    mounted(){
    this.category = this.categories
  },

}
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
</style>