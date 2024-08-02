<script lang="ts" setup>
const store = cvStore()
</script>

<template>
  <section id="sidebar-image" class="text-center">
    <img :src="store.personalInfo.image" class="rounded-circle" />
    <h1>{{ store.personalInfo.name }}</h1>
    <h2>{{ store.personalInfo.jobTitle[0] }}</h2>
  </section>
</template>