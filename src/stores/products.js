import axios from 'axios'
import { defineStore } from 'pinia'
export const productModule = defineStore('productModule', {
  state: () => ({
    products: [],
    laptops: [],
    smartPhones: [],
    fragrances: [],
    groceries:[],
    skinCare:[]

  }),
  actions: {
    async getProducts() {
      await axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          return (
            (this.products = res.data.products.slice(0, 8)),
            (this.laptops = res.data.products.filter((pro) => pro.category === 'laptops')),
            (this.smartPhones = res.data.products.filter((pro) => pro.category === 'smartphones')),
            (this.fragrances = res.data.products.filter((pro) => pro.category === 'fragrances')),
            (this.groceries = res.data.products.filter((pro) => pro.category === 'groceries')),
            (this.skinCare = res.data.products.filter((pro) => pro.category === 'skincare'))
)
        }, console.log(this.laptops))
        .catch((err) => console.log(err))
    }
  }
})
