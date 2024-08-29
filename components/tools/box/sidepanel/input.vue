<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Hooks
const store = useStoreTools();

// ------------- Data
const searchBar = ref("");

// ------------- Logic
const fieldModifier = (e: KeyboardEvent) => {
  store.runSearch(searchBar.value);
}
</script>

<template>
  <div class="vb-p-b-1 vb-p-t-1 co">
    <input type="text" class="form-control" aria-label="Text input with dropdown button" @keyup="fieldModifier"
      v-model="searchBar" />
  </div>

</template>
