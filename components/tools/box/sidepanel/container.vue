<script setup lang="ts">


const toolStore = useCounterStoreTools();

const searchBar = ref("");
const fieldModifier = (e: KeyboardEvent) => {
  toolStore.runSearch(searchBar.value);
}






</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="vb-p-b-1">
        <input
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
          @keyup="fieldModifier"
          v-model="searchBar"
        />
      </div>

      <h5 class="card-title"><BootstrapIcon name="arrow-bar-left" /> Sidepanel</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  max-width: 400px;
}
</style>