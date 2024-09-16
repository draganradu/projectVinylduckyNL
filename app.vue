<script setup lang="ts">
const store = useStore();
</script>

<template>
  <Modal v-if="store.modes.modalOpen" />
  <div :class="store.modes.modalOpen ? 'modal-in-view' : 'no-modal-in-view'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
