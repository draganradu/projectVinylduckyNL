<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Hooks
const toolStore = useCounterStoreTools();

// ------------- Props
const props = defineProps({
  box: {
    type: Object,
  },
  templateSize: {
    type: Number,
  },
  boxId: {
    type: Array
  }
});

// ------------- Logic
</script>

<template>
  <div :class="['box']" :style="`height: ${templateSize}px;`" @click="toolStore.selectABox(boxId as [number, number])">
    <div :class="['box-structure', `box-size-${props.box?.in.length}`]">
      <div v-for="i in box?.in" :key="i" :class="['drawers', i?.highlight ? 'highlight' : '']">
        <ToolsBoxTitle :title="i.content" :style="true" />
      </div>
    </div>
    <ToolsBoxRemoveBox class="remove" />
  </div>
</template>

<style scoped lang="scss">
.box {
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  &:hover {
    .remove {
      display: block;
    }
  }

  .remove {
    position: absolute;
    right: 0;
    top: 0;
    display: none;
  }

  .highlight {
    background-color: red;
  }
}

.drawers {
  border: 1px solid black;
  min-width: 10px;
  min-height: 10px;
}

.box-structure {
  display: grid;
  flex: 1;
}

.box-size {

  &-1,
  &-2 {
    grid-template-columns: repeat(1, 1fr)
  }

  &-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  &-9 {
    grid-template-columns: repeat(3, 1fr);
  }

  &-12 {
    grid-template-columns: repeat(4, 1fr);
  }

}
</style>