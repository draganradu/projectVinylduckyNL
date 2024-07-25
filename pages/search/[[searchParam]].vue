<template>
    <NuxtLayout name="page" text="2">
        <template #title>Search</template>
        <template #subtitle>"{{ search.params.searchParam }}"</template>
        Nothing found
    </NuxtLayout>    
</template>

<script setup lang="ts">
const search = useRoute();

useHead({
    title: `Search for ${search.params.searchParam}`,
  })

</script>
