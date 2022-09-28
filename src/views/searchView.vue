<template>
  <div class="">
    <navSearch></navSearch>
    <div
      class="max-w-7xl grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 lg:mx-40 mx-20 mt-10"
    >
      <div
        v-for="item in 30"
        :key="item"
        class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
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
          />
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
    <!-- component -->
    <!-- This is an example component -->
  </div>
</template>
<script>
import navSearch from "../components/navSearch.vue";
// import { VueAgile } from "vue-agile";

export default {
  components: {
    navSearch,
    // agile: VueAgile,
  },
};
</script>
