<script lang="ts" setup>
const store = cvStore()
</script>

<template>
  <section id="headline">
    <h1 class="vd-size-xx-large vd-size-regular">{{ store.personalInfo.name }}</h1>
    <h2 class="vd-size-normal vd-size-bold">{{ store.getBaseInfo(["personalInfo", "jobTitle"]) }}</h2>
    <h3 class="vd-size-normal vd-size-light">{{ store.personalInfo.location }}</h3>
  </section>
</template>

<style scoped lang="scss">
#headline {
  h2 {
    border-top: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
    ;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h3 {
    text-transform: none;
  }

  margin-bottom: 50px;
}

h1 {
  margin-top: 70px !important;
}
</style>