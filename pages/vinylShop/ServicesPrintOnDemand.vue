<script setup lang="ts">
// ------------- init
const appStore = useCounterStore();

// ------------- Data
const page = appStore.pages["largeFormatPrint"];

// ------------- SEO
useSeoMeta(
  seoService(
    {
      title: page.title + " - vinylducky.nl",
      description: "We provide a print-on-demand service up to AECH E size. We can do many custom things you might want."
    }
  )
);
</script>

<template>
  <NuxtLayout name="page" :color="page.color || 2" :text="page.text_color || 1">
    <template #title>{{ page.title }}</template>
    <template #subtitle>{{ page.subtitle }}</template>
    <div class="row">
      <div class="col-6">
        <p class="col scrum-main" v-html="$t(page.content, { br: '<br/><br/>' })"></p>
      </div>
      <div class="col-6">
        <ShopForm />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.form-vinyl-shop {
  border-left: 1px solid rgba($color: #000000, $alpha: .3);
}
</style>   