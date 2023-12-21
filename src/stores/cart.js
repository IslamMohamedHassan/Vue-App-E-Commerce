import { defineStore } from "pinia";


export const cartStore = defineStore("cartStore",({
    state: ()=> ({
        CartItems:[],
    }),
    actions:{
        addToCart(product){
            let oldProduct = this.CartItems.find((item)=>item.id === product.id);
            
            if (!oldProduct) {
                this.CartItems.push({ ...product });
            }else{
                oldProduct.quantity += product.quantity;
            }
            localStorage.setItem("cartItems",JSON.stringify(this.CartItems))
            console.log(this.CartItems);
        },
        getCartItems(){
            if (localStorage.getItem("cartItems")) {
                this.CartItems = JSON.parse(localStorage.getItem("cartItems"));
            }
        },
        deleteItem(id){
            this.CartItems = this.CartItems.filter((item)=> item.id !== id )
            localStorage.setItem('cartItems',JSON.stringify(this.CartItems));
            // console.log(id);
            console.log(this.CartItems);
        }
    },
}))