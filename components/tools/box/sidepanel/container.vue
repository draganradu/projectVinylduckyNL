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
        <input type="text" class="form-control" aria-label="Text input with dropdown button" @keyup="fieldModifier"
          v-model="searchBar" />
      </div>

      <div class="vb-p-b-2" v-show="toolStore.searchResult.length > 0">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="i in toolStore.searchResult">
                <b>{{ i.content }}</b>
                
              <br />
              <span class="d-flex justify-content-between align-items-center">
                <small>{{ i.rule }} </small>{{  i.id.join(",") }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <h5 class="card-title">
        <BootstrapIcon name="arrow-bar-left" /> Sidepanel
      </h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <!-- <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  max-width: 400px;
}
</style>