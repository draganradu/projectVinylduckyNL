<script setup lang="ts">
// ------------- init
const toolStore = useCounterStoreTools();

// ------------- Data

const { boxes } = toolStore;

// close modal - TODO: temp
const appStore = useCounterStore();
appStore.toggleModal(false);
</script>

<template>
  <div class="tools-page">
    <div class="tools-box-section">
      <ToolsRowbox v-for="(k, i) in boxes" :key="i" :template-size="4" :row="i">
        <ToolsBoxes v-for="(k2, i2) in k" :key="i2" :box="k2"> </ToolsBoxes>
      </ToolsRowbox>
      <ToolsBoxAddRow row="3" />
    </div>
    <ToolsBoxSidepanelContainer />
  </div>
</template>

<style scoped lang="scss">
.tools-page {
  padding-bottom: 100px;
  display: flex;

  .tools-box-section {
    flex: 1;
    max-width: 800px;
    position: relative;
  }
}
</style>