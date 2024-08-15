<script lang="ts" setup>
const store = cvStore()
</script>

<template>
  <section id="headline">
    <h1>{{ store.personalInfo.name }}</h1>
    <h2>{{ store.getBaseInfo(["personalInfo", "jobTitle"]) }}</h2>
    <h3>{{ store.personalInfo.location }}</h3>
  </section>
</template>

<style scoped lang="scss">
#headline {
  h1 {
    font-size: 3.2em;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 1.6em;
    border-top: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 100;
    font-size: 1em;
    text-transform: none;
  }
}
</style>