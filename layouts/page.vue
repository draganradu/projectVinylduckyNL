<template>
    <div :class="[' min-full-height', layoutCustomProps.color ? `vd-color-${layoutCustomProps.color}` : 'vd-color-none', `vd-color-text-${layoutCustomProps.text || 1}`]">
        <Navbar />
        <div class="container vb-p-t-2">
            <h1><slot name="title" /></h1>
            <h4><slot name="subtitle" /></h4>
            <hr />
            <slot />
            <!-- <p class="vb-p-t-1">
                <span class="placeholder col-1">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-4">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-3">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-7">P</span>
            </p>

            <p class="vb-p-t-1">
                <span class="placeholder col-1">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-4">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-3">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-7">P</span>
            </p>

            <p class="vb-p-t-1">
                <span class="placeholder col-1">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-4">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-3">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-7">P</span>
            </p>

            <p class="vb-p-t-1 vb-p-b-5">
                <span class="placeholder col-1">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-4">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-3">P</span>
                <span class="placeholder col-2">P</span>
                <span class="placeholder col-6">P</span>
                <span class="placeholder col-7">P</span>
            </p> -->
        </div>
    </div>
</template>

<script setup>
const layoutCustomProps = useAttrs()
console.log(layoutCustomProps.value)
</script>
