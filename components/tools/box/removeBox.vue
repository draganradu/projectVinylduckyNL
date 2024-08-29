<script lang="ts" setup>
// ------------- init
const store = useStoreTools();

// ------------- Logic
const removeBox = () => {
  store.removeBox();
}
</script>

<template>
  <div class="remove-btn-container" @click="removeBox">
    <BootstrapIcon class="remove text-danger" name="x-square-fill" />
  </div>
</template>

<style scoped lang="scss">
.remove-btn-container {
  padding: 5px;
  background: white;
}
</style>