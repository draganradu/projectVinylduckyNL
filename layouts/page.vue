<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Hooks 
const layoutCustomProps = useAttrs();

// ------------- Data
const { color, text = 1 } = layoutCustomProps;
</script>

<template>
  <div :class="[' min-full-height', color ? `vd-color-${color}` : 'vd-color-none', `vd-color-text-${text}`]">
    <Navbar />
    <div class="container vb-p-t-2">
      <h1>
        <slot name="title" />
      </h1>
      <h4>
        <slot name="subtitle" />
      </h4>
      <hr />
      <slot />
    </div>
  </div>
</template>
