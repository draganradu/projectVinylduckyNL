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
useSeoMeta(
  seoService(
    {
      title: "Vinyl Ducky - Signs and Stickers",
      description: "We are currently working on a new project so our usual response time is no longer as prompt as it used to be. As usual, we will respond with a spring in our step and a smile in our hearts, just not as prompt. We appreciate your patience. If you need to contact us you email us at yellow@vinylducky.nl or by phone at 0648459980 . We are happy to have a chat."
    }
  )
)
</script>

<template>
  <div>
    <LandingWaveLine />
    <div class="container-fluid">
      <div class="row">
        <LandingPanel v-for="(page, pageName ) in pages" :key="pageName" :color="page.color"
          :to="getUrl(pageName as string)">

          <template #title>{{ page.title }}</template>
          <template #subtitle>{{ page.subtitle }}</template>
          <template #content>{{ $t(page.content, { br: ' ' }).substring(0, 200) }} ...</template>
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