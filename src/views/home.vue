<template>
    <div class="m-6" v-for="(link, index) in links" :key="index">
      
      <a class=" px-2 py-1  text-black font-bold text-2xl cursor-crosshair hover:text-white hover:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white" :href="link.url">{{ link.text }} </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      links : [
        {
          text : "LUX MINIMA",
          url : "https://luxminima.xyz",
          img : "./assets/"
        },
        {
          text : "PRISM FLOWER",
          url : "https://prismflower.xyz",
          img : "./assets/"
        },
        {
          text : "ATELIER404",
          url : "https://atelier404.xyz",
          img : "./assets/"
        },
        {
          text : "TWITTER",
          url : "#",
          img : "./assets/"
        },
        {
          text : "INSTAGRAM",
          url : "#",
          img : "./assets/"
        },
      ]
    }
  },
  methods : {
    changeLuxminima() {
      this.links[0].text = "Nox minima"
    }
  },
  mounted() {
    this.changeLuxminima()
  }
}
</script>

<style>
</style>
