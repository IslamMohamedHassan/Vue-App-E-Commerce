<script >
import AppLayout from '@/components/global/AppLayout.vue';
import { RouterView } from 'vue-router';
export default{
  components:{
    AppLayout,
    
  }
}
</script>
<template>
  <app-layout>
    <RouterView />
  </app-layout>
</template>

<style>

nav a.router-link-exact-active {
  color: #f7a833;
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
   color: white;
}

nav a:first-of-type {
  border: 0;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 1000px) {
  nav a {
    /* font-size: 14px; */
  }
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}




  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
