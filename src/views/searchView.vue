<template>
  <div class="">
    <navSearch></navSearch>
    <carousel :items="1">
      <!-- <img src="https://placeimg.com/200/200/any?1" />

      <img src="https://placeimg.com/200/200/any?2" />

      <img src="https://placeimg.com/200/200/any?3" />

      <img src="https://placeimg.com/200/200/any?4" /> -->

      <!-- <img src="https://placeimg.com/200/200/any?5" />

      <img src="https://placeimg.com/200/200/any?6" />

      <img src="https://placeimg.com/200/200/any?7" />

      <img src="https://placeimg.com/200/200/any?8" /> -->
    </carousel>
    <div class="w-10/12 mx-auto mt-10">
      <div
        class="max-w-7xl grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mx-auto"
      >
        <div
          v-for="item in 30"
          :key="item"
          class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <carousel :items="1" :dots="false">
              <img
                v-for="n of 10"
                :key="n"
                :src="`https://placeimg.com/200/200/any?${n}`"
              />
            </carousel>
            <!-- <img
              alt="Meta Portal - Smart Video Calling for the Home with 10” Touch Screen Display - White"
              class="loading-0-2-50 load-0-2-51 img-0-2-468"
              data-src="https://i.honey-images.com/transform/resize?height=250&amp;width=250&amp;imageUrl=https://i.honey-images.com/v4/28_d0244b9c035a0ff40665ba2c2ad7e296.jpg&amp;productId=28_14cb4731f4b3e61b44a27cfd42ed6f61_14cb4731f4b3e61b44a27cfd42ed6f61&amp;extend=white"
              data-srcset="
              https://i.honey-images.com/transform/resize?height=250&amp;width=250&amp;imageUrl=https://i.honey-images.com/v4/28_d0244b9c035a0ff40665ba2c2ad7e296.jpg&amp;productId=28_14cb4731f4b3e61b44a27cfd42ed6f61_14cb4731f4b3e61b44a27cfd42ed6f61&amp;extend=white 1x,
              https://i.honey-images.com/transform/resize?height=500&amp;width=500&amp;imageUrl=https://i.honey-images.com/v4/28_d0244b9c035a0ff40665ba2c2ad7e296.jpg&amp;productId=28_14cb4731f4b3e61b44a27cfd42ed6f61_14cb4731f4b3e61b44a27cfd42ed6f61&amp;extend=white 2x,
            "
              sizes=""
              title=""
              src="https://i.honey-images.com/transform/resize?height=250&amp;width=250&amp;imageUrl=https://i.honey-images.com/v4/28_d0244b9c035a0ff40665ba2c2ad7e296.jpg&amp;productId=28_14cb4731f4b3e61b44a27cfd42ed6f61_14cb4731f4b3e61b44a27cfd42ed6f61&amp;extend=white"
              srcset="
                https://i.honey-images.com/transform/resize?height=250&amp;width=250&amp;imageUrl=https://i.honey-images.com/v4/28_d0244b9c035a0ff40665ba2c2ad7e296.jpg&amp;productId=28_14cb4731f4b3e61b44a27cfd42ed6f61_14cb4731f4b3e61b44a27cfd42ed6f61&amp;extend=white 1x,
                https://i.honey-images.com/transform/resize?height=500&amp;width=500&amp;imageUrl=https://i.honey-images.com/v4/28_d0244b9c035a0ff40665ba2c2ad7e296.jpg&amp;productId=28_14cb4731f4b3e61b44a27cfd42ed6f61_14cb4731f4b3e61b44a27cfd42ed6f61&amp;extend=white 2x
              "
            /> -->
          </a>
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
import carousel from "vue-owl-carousel";

// import { VueAgile } from "vue-agile";
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
    carousel,
    // agile: VueAgile,
  },
};
</script>
