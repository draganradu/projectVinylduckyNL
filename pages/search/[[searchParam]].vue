<template>
    <NuxtLayout name="page" text="2">
        <template #title>Search</template>
        <template #subtitle>"{{ search.params.searchParam }}"</template>
    </NuxtLayout>    
</template>

<script setup>
const search = useRoute();

useHead({
    title: `Search for ${search.params.searchParam}`,
  })

</script>
