<script setup lang="ts">
const search = useRoute();

// ------------- SEO
useSeoMeta(
  seoService(
    {
      title: "Search baby - vinylducky.nl",
      description: "We started the vinyl shop to respond to the needs of one of our clients who needed to make compelling demo events. But they were building a physical product, and that came with a set of challenges because the iteration did not look like professional products, and there were no lettering descriptions, etc. So we bought all the equipment and started cutting vinyl for different companies."
    }
  )
);

</script>


<template>
  <NuxtLayout name="page" text="2">
    <template #title>Search</template>
    <template #subtitle>"{{ search.params.searchParam }}"</template>
    Nothing found
  </NuxtLayout>
</template>
