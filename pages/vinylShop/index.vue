<template>
  <NuxtLayout name="page" :color="page.color" :text="page.text_color || 1">
    <template #title>{{ page.title }}</template>
    <template #subtitle>{{ page.subtitle }}</template>
    <div class="row">
      <div class="col-6">
        <p
          class="col scrum-main"
          v-html="$t(page.content, { br: '<br/><br/>' })"
        ></p>
      </div>
      <div class="col-6">
        <ShopForm />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
// ------------- init
const appStore = useCounterStore();

// ------------- Data
const page = appStore.pages["vinylShop"];

useHead({
  title: "Vinyl Shop",
});
</script>

<style lang="scss" scoped>
.form-vinyl-shop {
border-left: 1px solid rgba($color: #000000, $alpha: .3);
}
</style>   