<template>
  <NuxtLayout name="page" :color="page.color" text="1">
    <template #title>{{ page.title }}</template>
    <template #subtitle>{{ page.subtitle }}</template>
    {{ page.content }}
  </NuxtLayout>
</template>

<script setup>
// ------------- init
const appStore = useCounterStore();

// ------------- Data
const page = appStore.pages["scrum"];

// ------------- SEO
useHead({
  title: page.title + " - vinylducky.nl",
})

</script>
