<script>
import navBar from "./navBar.vue";
import pageHeader from "./pageHeader.vue";
import secVideo from "./secVideo.vue";
import secVideo2 from "./secVideo2.vue";
import secVideo3 from "./secVideo3.vue";
import secVideo4 from "./secVideo4.vue";
import secImage from "./secImage.vue";
import PageFooter from "./pageFooter.vue";
export default {
  components: {
    navBar,
    pageHeader,
    secVideo,
    secVideo2,
    secVideo3,
    secVideo4,
    secImage,
    PageFooter,
  },
};
</script>
<template>
  <div id="app" dir="rtl">
    <nav-Bar></nav-Bar>
    <router-view></router-view>
    <pageHeader></pageHeader>
    <secVideo></secVideo>
    <secVideo2></secVideo2>
    <secVideo3></secVideo3>
    <secVideo4></secVideo4>
    <secImage></secImage>
    <Page-Footer></Page-Footer>
  </div>
</template>

<style lang="scss">
</style>
