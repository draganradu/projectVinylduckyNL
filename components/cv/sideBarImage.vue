<script lang="ts" setup>
const store = cvStore()
</script>

<template>
  <section id="sidebar-image" class="text-center">
    <img :src="store.personalInfo.image" class="rounded-circle" />
  </section>
</template>