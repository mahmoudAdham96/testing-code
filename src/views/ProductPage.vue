<template>
  <div class="">
    <search-List @customChange="handleCustomChange"></search-List>
    <div class="w-10/12 mx-auto mt-10">
      <div
        class="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mx-auto"
      >
        <div
          v-for="item in info"
          :key="item.id"
          class="max-w-sm overflow-hidden bg-white rounded-lg dark:bg-gray-800"
        >
          <div style="z-index: 1; overflow: hidden">
            <Carousel
              :per-page="1"
              :mouse-drag="true"
              :navigationEnabled="true"
              :rtl="true"
              :indicators="false"
              :controls="true"
            >
              <!-- <slide tabindex="1" v-for="img in 5" :key="img">
                <img
                  class="w-full"
                  :src="`https://picsum.photos/300/30${img}`"
                  alt=""
                /> -->
              <slide tabindex="1">
                <img class="w-full" :src="item.image" alt="" />
              </slide>
              <slide tabindex="2">
                <img
                  class="w-full"
                  src="https://picsum.photos/300/302"
                  alt=""
                />
              </slide>
            </Carousel>
          </div>
          <div class="text-right p-4">
            <a href="#">
              <h5
                class="mb-1 tracking-tight text-sm text-gray-400 dark:text-white"
              >
                {{ item.title }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ item.description.substr(0, 60) }}...
            </p>
            <h1 class="font-bold">${{ item.price }}</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- component -->
    <!-- This is an example component -->
  </div>
</template>
<script>
import searchList from "../components/searchList.vue";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";

export default {
  data() {
    return {
      info: [],
      search: "",
    };
  },
  methods: {
    handleCustomChange(s) {
      this.search = s;
    },

    init() {
      this.search = this.$route.params?.search;
    },
  },

  mounted() {
    this.init();
    console.log(this.$router);
    console.log(this.$router.query);
    console.log(this.search + "mounted");
    if (this.search) {
      console.log(this.search + "from Api");
      const baseURI = `https://fakestoreapi.com/products?search=${this.search}`;
      console.log(baseURI + "baseURI");
      axios
        .get(baseURI)
        .then((response) => (this.info = response.data))
        .catch((error) => console.log(error));
    } else {
      this.$router.push("PageHome");
    }
  },
  computed: {
    // filteredList() {
    //   return this.info.filter((item) => {
    //     return item.title.toLowerCase().includes(this.search.toLowerCase());
    //   });
    // },
  },
  components: {
    searchList,
    Carousel,
    Slide,
  },
};
</script>
<style scoped>
.VueCarousel-slide {
  height: 250px;
}
</style>
