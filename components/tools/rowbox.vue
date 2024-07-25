<script setup lang="ts">

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
    <ToolsBoxAddBox :row="row" class="show-on-hover" />
  </div>
</template>

<style scoped lang="scss">
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