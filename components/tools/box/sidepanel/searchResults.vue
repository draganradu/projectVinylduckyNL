<script setup lang="ts">
// ------------- Hooks
const store = useStoreTools();
</script>

<template>
  <div class="vb-p-b-2 co" v-show="store.searchResult.length > 0">
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="i in store.searchResult">
          <ToolsBoxTitle class="title-box" :title="i.content" />
          <br />
          <span class="d-flex justify-content-between align-items-center">
            <small>{{ i.rule }} </small>{{ i.id.join(",") }}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div class="card" v-if="store.searchResultOther.length > 0">
    <ul class="list-group list-group-flush">
      <li class="list-group-item list-group-item-success">Other Boxes</li>
      <li class="list-group-item" v-for="i in store.searchResultOther" :key="i">
        {{ store.otherBoxes[i].id }}
        <small class="d-block">{{ store.otherBoxes[i].contains.join(" , ") }}</small>
      </li>
    </ul>

  </div>
</template>
