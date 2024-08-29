<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- init
const store = useStoreTools();

// ------------- Hooks 
const { longestRow } = storeToRefs(store);
const calculateHeight = (longestRowTemplate: number) => {
  return ((useWindowSize().width.value - (400 + 50)) / longestRowTemplate)
}

// ------------- Data
const { boxes } = store;

// close modal - TODO: temp
const appStore = useStore();
appStore.toggleModal(false);


</script>

<template>
  <div class="tools-page">
    <div class="tools-box-section" v-if="parseInt(useWindowSize().width.value as any)">
      <ToolsRowbox v-for="(k, i) in boxes" :key="i" :template-size="longestRow" :row="i">
        <ToolsBoxes v-for="(k2, i2) in k" :key="i2" :box="k2" :template-size="calculateHeight(longestRow)" :boxId="[i,i2]" />
      </ToolsRowbox>
      <ToolsBoxAddRow row="3" />
      <ToolsBoxOther />
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
    position: relative;
  }
}
</style>