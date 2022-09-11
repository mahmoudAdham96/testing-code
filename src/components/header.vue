<template>
  <div>
    <div class="flex items-center justify-between w-10/12 m-auto">
      <div class="">01</div>
      <div
        class=""
        style="
          background-image: url('https://cdn.pixabay.com/photo/2022/06/06/19/36/boat-7246847_960_720.jpg');
        "
      >
        02
      </div>
      <div class="bg-img">03</div>
    </div>
    <div
      :style="{ 'background-image': 'url(https://vuejs.org/images/logo.png)' }"
    ></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bg-img {
  background: url ("./assets/index.png");
}
</style>