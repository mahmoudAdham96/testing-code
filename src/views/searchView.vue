<template>
  <div class="">
    <navSearch></navSearch>
    <div class="w-10/12 mx-auto mt-10">
      <div
        class="max-w-7xl grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mx-auto"
      >
        <div
          v-for="item in 30"
          :key="item"
          class="max-w-sm overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div style="z-index: 1; overflow: hidden" class="w-full">
            <Carousel
              :per-page="1"
              :mouse-drag="true"
              :navigationEnabled="true"
              :rtl="true"
              :indicators="false"
              :controls="true"
            >
              <slide tabindex="1" v-for="img in 5" :key="img">
                <img :src="`https://picsum.photos/300/30${img}`" alt="" />
              </slide>
            </Carousel>
          </div>
          <div class="text-right p-4">
            <a href="#">
              <h5
                class="mb-1 tracking-tight text-sm text-gray-400 dark:text-white"
              >
                Best Buy
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              بوابة ميتا - مكالمات فيديو ذكية للمنزل مع لمس 10 بوصات
            </p>
            <h1 class="font-bold">$179.99</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- component -->
    <!-- This is an example component -->
  </div>
</template>
<script>
import navSearch from "../components/navSearch.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  // data() {
  //   return {
  //     settings: {
  //       dots: true,
  //       dotsClass: "slick-dots custom-dot-class",
  //       edgeFriction: 0.35,
  //       infinite: false,
  //       speed: 500,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //     },
  //   };
  // },
  components: {
    navSearch,
    Carousel,
    Slide,
  },
};
</script>
<style scoped>
.VueCarousel-navigation-button {
  /* color: red !important;
  font-size: 300px !important;
  right: 30px !important; */
  position: relative !important;
}
.VueCarousel-slide {
  height: 250px;
}
</style>
