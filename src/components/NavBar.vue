<template>
    <nav>
        <div class="title">
            <h4> Bienvenid@ a FakeShop</h4>
        </div>

    <div class="componente">
        <router-link :to="{name: 'login' }">Login</router-link> |
        <router-link :to="{name: 'about'}">Perfil</router-link> |
        <router-link :to="{name: 'detail'}"> Productos </router-link>

        <button class="btn btn-light"
        v-for="link in links"
        :key="link.label"
        v-on:click="$emit('buttonClicked', link)">{{ link.label}}</button>
    </div>
    </nav>


</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/link";


interface NavbarProps {
  title: string;
  links: Link[];
  color?: string;
}
export default defineComponent({
  name: "NavBar",
  emits: ["buttonClicked"],
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
        type: Array as PropType<Link[]>,
        default(): Link[] {
            return [
                {label: "Logout", link: "http://www.google.es"},

            ];
        },
    },
    color: String,
  },
});
</script>

<style scoped>
nav {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #83b0dd;
  color: white;
}
.componente{
    text-decoration-color: antiquewhite;
    display: flex;
    padding: 1rem;
}

</style>
