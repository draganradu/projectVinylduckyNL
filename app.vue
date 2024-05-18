<script setup>
const appStore = useCounterStore();
const { modes: { modalOpen} } = appStore;
</script>

<template>
  <Modal v-if="modalOpen"/>
  <div :class="modalOpen ? 'modal-in-view' : 'no-modal-in-view'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  
</template>
