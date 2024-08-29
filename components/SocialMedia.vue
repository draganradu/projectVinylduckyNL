<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Init and Import
const store = useStore();

// ------------- Data
const { socialMedia } = store;
</script>

<template>
  <div>
    <a v-for="(i, k) in  socialMedia" target="_blank" :key="k" :href="i">
      <BootstrapIcon :title="k" :name="socialMediaIcons(k as string)" class="me-2" />
    </a>
  </div>
</template>