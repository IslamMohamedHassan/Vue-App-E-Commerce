import axios from 'axios'
import { defineStore } from 'pinia'
export const productModule = defineStore('productModule', {

  state: () => ({
    products: [],
  }),
  actions:{
    async getProducts(){
      await axios.get('https://dummyjson.com/products')
      .then((res)=> this.products = res.data.products.slice(0,8))
      .catch((err)=>console.log(err))
  }
  
  }

})
