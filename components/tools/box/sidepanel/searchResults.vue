<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Hooks
const toolStore = useCounterStoreTools();
</script>

<template>
  <div class="vb-p-b-2 co" v-show="toolStore.searchResult.length > 0">
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="i in toolStore.searchResult">
          <b>{{ i.content }}</b>
          <br />
          <span class="d-flex justify-content-between align-items-center">
            <small>{{ i.rule }} </small>{{ i.id.join(",") }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
