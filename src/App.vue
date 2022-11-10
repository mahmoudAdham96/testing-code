<script>
import navBar from "./components/navBar.vue";
import PageFooter from "./components/pageFooter.vue";
export default {
  components: {
    navBar,
    PageFooter,
  },
  data() {
    return {
      options: {
        navButtons: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
            },
          },
          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: false,
            },
          },
        ],
      },
    };
  },
};
</script>
<template>
  <div id="app" dir="rtl">
    <nav-Bar></nav-Bar>
    <router-view></router-view>
    <Page-Footer></Page-Footer>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cairo");
* {
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.VueCarousel-slide {
  height: 350px;
  text-align: center;
}

.VueCarousel-slide .img-container {
  height: 130px;
  width: 100%;
  float: left;
}

.VueCarousel-slide img {
  margin: 0 auto;
}

.VueCarousel-slide h3 {
  height: 180px;
}
</style>
