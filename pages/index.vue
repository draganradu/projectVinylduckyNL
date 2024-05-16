<template>
  <div>
    <LandingWaveLine />
    <div class="container-fluid">
      <div class="row">
        <LandingPanel v-for="(page, pageName ) in pages" :key="pageName" :color="page.color" :to="getUrl(pageName)">

          <template #title>{{ page.title }}</template>
          <template #subtitle>{{page.subtitle}}</template>
        </LandingPanel>
        <LandingContactPanel />
      </div>
    </div>
    <!-- Footer-->
  </div>
</template>

<script setup>
// ------------- init
definePageMeta({ layout: "landing" })
const appStore = useCounterStore();

// ------------- Data
const { pages } = appStore;

// ------------- Logic
const getUrl = appStore.getUrl

// ------------- SEO
useSeoMeta({
  ...seoDefaultStructure,
  title: 'vinyl Ducky',
  ogTitle: 'vinyl Ducky',
})
</script>

<style scoped lang="scss">
@media screen and (max-width: 994px) {
  .vd-h-100 {
    height: inherit;
  }
}
</style>