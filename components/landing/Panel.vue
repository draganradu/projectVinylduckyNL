<script setup>
const props = defineProps(['color', 'text' , 'to'])

</script>

<template>
    <div :class="['col-lg col-md-12 vd-h-100', `vd-color-${color || '1'}`, `vd-color-text-${text || '1'}`]">
        <div class="vb-p-1">
            <router-link :to="to">
                <h1>
                    <slot name="title" />
                </h1>
                <h4>
                    <slot name="subtitle" />
                </h4>
                <p>
                    <span class="placeholder col-1">P</span>
                    <span class="placeholder col-6">P</span>
                    <span class="placeholder col-4">P</span>
                    <span class="placeholder col-2">P</span>
                    <span class="placeholder col-3">P</span>
                    <span class="placeholder col-2">P</span>
                    <span class="placeholder col-6">P</span>
                    <span class="placeholder col-7">P</span>
                </p>
                Go to
            </router-link>
        </div>
    </div>
</template>