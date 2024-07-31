<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Props
const props = defineProps({
  templateSize: {
    type: Number,
    default: 2
  },
  row: {
    type: Number,
    default: 1
  },
});

</script>


<template>
  <div class="row-box" :style="{
    'grid-template-columns': `repeat(${props.templateSize}, 1fr)`,
  }">
    <slot />
    <ToolsBoxAddBox :row="row" />
  </div>
</template>

<style lang="scss">
.row-box {
  display: grid;
  padding-right: 50px;

  &:hover {
    .show-on-hover {
      display: block;
    }
  }

  .show-on-hover {
    display: none;
  }
}
</style>