<script setup lang="ts">
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