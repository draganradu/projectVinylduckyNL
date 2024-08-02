<script lang="ts" setup>
// ------------- Hooks
const toolStore = useCounterStoreTools();
</script>

<template>
  <div v-if="toolStore.selectedBox.showSelected">
    <hr />
    <div class="d-flex justify-content-between">
      <div>
        <b>Selected</b> <span>{{ toolStore.selectedBox.id }}</span>
      </div>
      <div>
        <BootstrapIcon name="backspace-fill" class="pad" @click="toolStore.deSelectABox()" />
      </div>
    </div>
    <hr />
    <ToolsBoxSidepanelShowSelectedData />
  </div>

</template>

<style scoped lang="scss">
.pad {
  padding-right: 5px;
  padding-left: 5px;
}
</style>