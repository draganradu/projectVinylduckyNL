<script setup lang="ts">
// ------------- 0.0.1
// ------------- init
definePageMeta({ layout: "landing" })
const appStore = useCounterStore();

// ------------- Data
const { pages } = appStore;

// ------------- Logic
const getUrl = appStore.getUrl

// ------------- SEO
// TODO: ECBGI-118
useSeoMeta({
  ...seoDefaultStructure,
  title: 'Vinyl Ducky - Signs and Stickers',
  ogTitle: 'Vinyl Ducky - Signs and Stickers',
})
</script>

<template>
  <div>
    <LandingWaveLine />
    <div class="container-fluid">
      <div class="row">
        <LandingPanel v-for="(page, pageName ) in pages" :key="pageName" :color="page.color" :to="getUrl(pageName)">

          <template #title>{{ page.title }}</template>
          <template #subtitle>{{page.subtitle}}</template>
          <template #content>{{ $t(page.content, {br: ' '}).substring(0,200) }} ...</template>
        </LandingPanel>
        <LandingContactPanel />
      </div>
    </div>
    <!-- Footer-->
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 994px) {
  .vd-h-100 {
    height: inherit;
  }
}
</style>