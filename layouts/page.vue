<template>
    <div :class="[' min-full-height', layoutCustomProps.color ? `vd-color-${layoutCustomProps.color}` : 'vd-color-none', `vd-color-text-${layoutCustomProps.text || 1}`]">
        <Navbar />
        <div class="container vb-p-t-2">
            <h1><slot name="title" /></h1>
            <h4><slot name="subtitle" /></h4>
            <hr />
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const layoutCustomProps = useAttrs()
console.log(layoutCustomProps.value)
</script>
