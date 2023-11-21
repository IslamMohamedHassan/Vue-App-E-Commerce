<template>
        <v-navigation-drawer
        temporary
        v-model="drawer"
        location="right">
        </v-navigation-drawer>
</template>

<script>
    export default{
        data(){
            return{
                drawer : false
            }
        },
     
        inject:["Emitter"],
        mounted(){
            this.Emitter.on("openCart", ()=>{
             return this.drawer = !this.drawer;
            })
                
            }
        }
</script>