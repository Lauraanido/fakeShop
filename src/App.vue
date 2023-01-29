<template>
  <navBar title="Hola"
  @buttonClicked="alertaClick($event)"
   
  />
  
  
  <router-view/>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import { Link } from "./interfaces/link";

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    
  },

  setup() {
    return {
      // para vaciar compra o logout
      alertaClick: (link: Link) => alert(link.label + " Pulsado!"),
    };
  

  }
})



</script>

<style>
*{
  padding: 0%;
  margin: 0%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c2c7cc;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #e1ebe6;
}
</style>
