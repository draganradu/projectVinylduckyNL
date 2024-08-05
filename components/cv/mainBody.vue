<script setup lang="ts">
// ------------- Init and Import
const store = cvStore()

</script>

<template>
  <div id="mainbody" class="col">
    <CvBodyJson v-if="store.verbose.level === 3" />
    <CvBodyWireframe v-else-if="store.verbose.level === 4" />
    <CvBodyScrum v-else-if="store.verbose.level === 5" />
    <CvBodyDefault v-else />
  </div>
</template>
