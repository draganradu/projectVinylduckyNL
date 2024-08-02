<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Props
const props = defineProps({
  fluid: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="[props.fluid ? 'container-fluid' : 'container']">
    <slot />
  </div>
</template>