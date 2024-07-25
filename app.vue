<script setup>
const appStore = useCounterStore();
const { modalOpen } = ref(appStore.modes);
</script>

<template>
  <Modal v-if="modalOpen" />
  <div :class="modalOpen ? 'modal-in-view' : 'no-modal-in-view'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
