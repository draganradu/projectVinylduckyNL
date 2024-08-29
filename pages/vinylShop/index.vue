<script setup lang="ts">
// ------------- init
const store = useStore();

const page = store.pages["vinylShop"];

// ------------- SEO

useSeoMeta(
  seoService(
    {
      title: page.title + " - vinylducky.nl",
      description: "We are currently working on a new project so our usual response time is no longer as prompt as it used to be. As usual, we will respond with a spring in our step and a smile in our hearts, just not as prompt. We appreciate your patience. If you need to contact us you email us at yellow@vinylducky.nl or by phone at 0648459980 . We are happy to have a chat."
    }
  )
)

</script>

<template>
  <NuxtLayout name="page" :color="page.color" :text="page.text_color || 1">
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