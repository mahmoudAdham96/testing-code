<script>
import searchList from "./searchList.vue";
import pageHeader from "./pageHeader.vue";
import secVideo from "./secVideo.vue";
import secVideo2 from "./secVideo2.vue";
import secVideo3 from "./secVideo3.vue";
import secVideo4 from "./secVideo4.vue";
import secImage from "./secImage.vue";
import PageFooter from "./pageFooter.vue";
import loginPage from "./loginPage.vue";

export default {
  components: {
    searchList,
    pageHeader,
    secVideo,
    secVideo2,
    secVideo3,
    secVideo4,
    secImage,
    PageFooter,
    loginPage,
  },
};
</script>
<template>
  <div id="app" dir="rtl">
    <search-List></search-List>
    <pageHeader></pageHeader>
    <secVideo></secVideo>
    <secVideo2></secVideo2>
    <secVideo3></secVideo3>
    <secVideo4></secVideo4>
    <secImage></secImage>
    <login-page></login-page>
    <Page-Footer></Page-Footer>
  </div>
</template>

<style lang="scss"></style>
