<script>
import navBar from "./components/navBar.vue";
import pageHeader from "./components/pageHeader.vue";
import secVideo from "./components/secVideo.vue";
import secVideo2 from "./components/secVideo2.vue";
import secVideo3 from "./components/secVideo3.vue";
import secVideo4 from "./components/secVideo4.vue";
import secImage from "./components/secImage.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
    navBar,
    pageHeader,
    secVideo,
    secVideo2,
    secVideo3,
    secVideo4,
    secImage,
    Footer,
  },
};
</script>
<template>
  <div id="app" dir="rtl">
    <nav-Bar></nav-Bar>
    <pageHeader></pageHeader>
    <secVideo></secVideo>
    <secVideo2></secVideo2>
    <secVideo3></secVideo3>
    <secVideo4></secVideo4>
    <secImage></secImage>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import url("http://fonts.cdnfonts.com/css/droid-arabic-naskh");
#app {
  font-family: "Droid Arabic Naskh", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
