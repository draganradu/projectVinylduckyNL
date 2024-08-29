<script setup lang="ts">
const store = useStore();
const { modalOpen } = ref(store.modes); // toDo:ECBGI-117
</script>

<template>
  <Modal v-if="modalOpen" />
  <div :class="modalOpen ? 'modal-in-view' : 'no-modal-in-view'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
