<template>
  <div class="">
    <search-List @customChange="handleCustomChange"></search-List>
    <div v-if="!isLoaded" class="w-10/12 mx-auto mt-10">
      <div
        class="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mx-auto"
      >
        <div
          v-for="item in 12"
          :key="item"
          class="max-w-sm overflow-hidden bg-white rounded-lg dark:bg-gray-800"
        >
          <div style="z-index: 1; overflow: hidden">
            <div class="bg-gray-200 w-full h-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoaded" class="w-10/12 mx-auto mt-10">
      <div
        class="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mx-auto"
      >
        <div
          v-for="item in getItems"
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
      <div class="Page navigation example">
        <paginate
          :page-count="getPaginateCount"
          :prev-text="'Previous'"
          :next-text="'next'"
          :click-handler="paginateClickCallback"
          :container-class="'inline-flex -space-x-px'"
          :page-class="''"
          :page-link-class="'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
          :prev-class="''"
          :prev-link-class="'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
          :next-class="''"
          :next-link-class="'py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
          :first-last-button="true"
          :first-button-text="'<<'"
          :last-button-text="'>>'"
          :active-class="'py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'"
        >
        </paginate>
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
import paginate from "vuejs-paginate";

export default {
  data() {
    return {
      info: [],
      search: "",
      isLoaded: false,
      currentPage: 1,
      perPage: 3,
    };
  },
  components: {
    searchList,
    Carousel,
    Slide,
    paginate,
  },
  methods: {
    handleCustomChange(s) {
      console.log(s + " ss");
      this.search = s;
      this.gitData();
      console.log(this.search + " s2");
    },
    paginateClickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },

    init() {
      this.search = this.$route.params?.search;
      this.gitData();
    },
    gitData() {
      this.isLoaded = false;
      const baseURI = `https://fakestoreapi.com/products?search=${this.search}`;
      console.log(baseURI + " baseURI gitData");
      axios
        .get(baseURI)
        .then((response) => {
          this.info = response.data.map((p) => {
            return { ...p, title: p.title + new Date() };
          });
          setTimeout(() => (this.isLoaded = true), 500);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.init();
    console.log(this.$router);
    // console.log(this.$router.query);
    console.log(this.search + "mounted");
    // this.gitData();
  },
  computed: {
    getItems: function () {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.info.slice(start, end);
    },
    getPaginateCount: function () {
      return Math.ceil(this.info.length / this.perPage);
    },
    // filteredList() {
    //   return this.info.filter((item) => {
    //     return item.title.toLowerCase().includes(this.search.toLowerCase());
    //   });
    // },
  },
};
</script>
<style scoped>
.VueCarousel-slide {
  height: 250px;
}
</style>
