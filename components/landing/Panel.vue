<script setup lang="ts">
const props = defineProps({
  color: { type: String, default: "1" },
  text: { type: String, default: "1" },
  to: { type: String, default: "/" },
  content: String,
});

const { locale } = useI18n() as any;

const linker = (a: string) => {
  return locale.value + "/" + a;
};
</script>

<template>
  <div :class="[
    'landing-panel',
    'col-lg col-md-12 vd-h-100',
    `vd-color-${color}`,
    `vd-color-text-${text}`,
  ]">
    <div class="vb-p-1">
      <nuxt-link :to="linker(to)">
        <h1>
          <slot name="title" />
        </h1>
        <h4>
          <slot name="subtitle" />
        </h4>
        <hr />
        <p v-if="$slots.content">
          <slot name="content" />
        </p>
        <p v-else>
          <span class="placeholder col-1">P</span>
          <span class="placeholder col-6">P</span>
          <span class="placeholder col-4">P</span>
          <span class="placeholder col-2">P</span>
          <span class="placeholder col-3">P</span>
          <span class="placeholder col-2">P</span>
          <span class="placeholder col-6">P</span>
          <span class="placeholder col-7">P</span>
        </p>
        <hr />
        Go to

        <LandingPanelDuck :color="`vd-color-fill-${color}`" />
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-panel {
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 992px) {
  .landing-panel {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>