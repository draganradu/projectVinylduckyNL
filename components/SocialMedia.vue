<script setup>
const appStore = useCounterStore();
</script>

<template>
  <div>
    <a v-for="(i, k) in  appStore.socialMedia" target="_blank" :key="k" :href="i">
      <BootstrapIcon :title="k" :name="socialMediaIcons(k)" />
    </a>
  </div>
</template>