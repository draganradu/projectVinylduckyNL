<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Props
const props = defineProps(
  ["title", "style"]);
const is = {
  empty: typeof props.title === "string" && props.title.length === 0,
  string: typeof props.title === "string" && props.title.length > 0,
  array: Array.isArray(props.title)
}


</script>

<template>
  <span :class="props.style ? 'style-title' : 'non-style'">
    <h3 v-if="is.empty">Empty</h3>
    <h3 v-else-if="is.string">{{ props.title }}</h3>
    <h3 v-else-if="is.array" class="array">
      <span v-for="i in props.title" :key="i">
        {{ i }}
      </span>
    </h3>
  </span>
</template>

<style scoped lang="scss">
.style-title {
  h3 {
    font-size: 12px;
    text-align: center;

    &.array {
      span {
        display: block;

        &:first-child {
          font-size: 70%;
        }
      }
    }
  }
}

.non-style {
  h3 {
    font-size: 1rem;
    font-weight: 700;
    display: inline;
  }
}
</style>