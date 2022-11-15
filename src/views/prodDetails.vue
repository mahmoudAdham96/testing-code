<template>
  <div class="border-t-2 border-t-indigo-500">
    <div
      class="container w-5/6 mx-auto"
      v-for="prod in filteredProd"
      :key="prod.id"
    >
      <div class="text-left mb-8">
        <router-link to="/">home</router-link> > {{ prod.category }}
      </div>
      <div class="flex text-black justify-between">
        <div class="w-1/2">
          <h1 class="text-left text-4xl font-bold">
            {{ prod.title }}
          </h1>
          <div class="flex">
            <div class="w-1/6">
              <img
                :class="{
                  'border-gray-900  opacity-100': imgActive.includes(
                    prod.image
                  ),
                }"
                @click="getImgActive(prod.image)"
                class="p-2 mt-6 h-20 object-cover w-20 rounded opacity-75 hover:opacity-100 border hover:border-gray-900"
                :src="prod.image"
              />
              <img
                :class="{
                  ' border-gray-900  opacity-100': imgActive.includes(
                    'https://i.honey-images.com/v4/7359609457586544172_2c8dbd4a77a552a0d1d50de189b51e6c.jpg'
                  ),
                }"
                @click="
                  getImgActive(
                    'https://i.honey-images.com/v4/7359609457586544172_2c8dbd4a77a552a0d1d50de189b51e6c.jpg'
                  )
                "
                class="p-2 mt-6 h-20 object-cover w-20 max-h-28 rounded opacity-50 hover:opacity-100 border hover:border-gray-900"
                :src="'https://i.honey-images.com/v4/7359609457586544172_2c8dbd4a77a552a0d1d50de189b51e6c.jpg'"
              />
            </div>
            <div class="w-5/6">
              <img class="w-full m-auto p-20" :src="imgActive" />
            </div>
          </div>
        </div>
        <div class="w-1/2 pl-24">
          <div class="text-left text-2xl font-bold">Buying Options</div>
          <div class="border border-grey-200 mt-8 rounded-2xl p-6">
            <div class="flex justify-between">
              <div class="flex">
                <img
                  class="text-left w-8 h-8 rounded-full"
                  src="https://cdn.honey.io/images/store-logos/7359609457586544172.png"
                />
                <div class="pl-2">
                  <span class="text-xl font-bold">Redbubble</span>
                  <span class="pl-2 text-xs px-1 bg-yellow-100 text-yellow-700"
                    >potentially outdated
                  </span>
                  <p class="text-left text-xs">5% Cash Back storewide*†</p>
                </div>
              </div>
              <div class="flex bg-blue-200 text-blue-600 h-7 px-2">
                Top pick
              </div>
            </div>
            <div class="text-left my-8 font-bold text-6xl">
              ${{ prod.price }}
            </div>
            <button
              class="bg-yellow-600 hover:bg-opacity-70 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 text-white w-full rounded text-xl py-2"
            >
              shop
            </button>
          </div>
          <div class="border border-grey-200 mt-8 rounded p-4 font-bold">
            Add to Droplist
          </div>
          <p class="mt-6 text-sm text-left">
            †Honey Gold terms apply. Honey Cash Back does not affect the price
            you pay at checkout. Cash Back rewards are given in Honey Gold
            rewards points which can be redeemed for cash to your PayPal account
            among other redemption options.
          </p>
        </div>
      </div>
      <div>
        <div class="text-left text-lg font-bold my-4">Product Details</div>
        <ul class="list-disc w-1/2">
          <li class="text-left">
            {{ prod.description }}
          </li>
          <!-- <li class="text-left">
            Slim fit, so size up if you prefer a looser fit, or check out the
            Classic T-Shirt
          </li>
          <li class="text-left">
            Male model shown is 6'0" / 183 cm tall and wearing size Large
          </li>
          <li class="text-left">
            Female model shown is 5'8" / 173 cm tall and wearing size Small
          </li>
          <li class="text-left">
            Midweight 4.2 oz. / 145 gsm fabric, solid color t-shirts are 100%
            cotton, heather grey t-shirts are 90% cotton/10% polyester charcoal
            heather t-shirts are 52% cotton/48% polyester
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      imgActive: "prod-image.jpg",
      id: null,
      products: [],
      isLoaded: false,
    };
  },
  mounted() {
    this.gitData();
  },
  methods: {
    gitData() {
      const baseURI = `https://fakestoreapi.com/products?search=`;
      axios
        .get(baseURI)
        .then((response) => {
          this.products = response.data;
          this.id = parseInt(this.$route.params?.id);
          this.imgActive = this.products[this.id - 1].image;
          console.log(this.imgActive);
          console.log(this.id);
        })
        .catch((error) => console.log(error));
    },
    // getImgUrl(pic) {
    //   return require("../assets/" + pic);
    // },
    getImgActive(pic) {
      this.imgActive = pic;
    },
    init() {
      this.id = this.$route.params?.id;
      console.log(this.id + "id 55");
      console.log(this.products + "68");
    },
  },
  computed: {
    filteredProd() {
      console.log(this.products);
      console.log(this.imgActive);

      return this.products.filter((prod) => prod.id === this.id);
    },
  },
};
</script>
