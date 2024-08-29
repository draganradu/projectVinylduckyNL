<script lang="ts" setup>
// ------------- Hooks
const store = useStoreTools();
</script>

<template>
  <div v-if="store.selectedBox.showSelected">
    <hr />
    <div class="d-flex justify-content-between">
      <div>
        <b>Selected</b> <span>{{ store.selectedBox.id }}</span>
      </div>
      <div>
        <BootstrapIcon name="backspace-fill" class="pad" @click="store.deSelectABox()" />
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