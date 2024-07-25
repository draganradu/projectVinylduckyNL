<script setup lang="ts">
const props = defineProps(['fluid'])
</script>

<template>
    <div :class="[props.fluid ? 'container-fluid' : 'container']">
        <slot />
    </div>
</template>