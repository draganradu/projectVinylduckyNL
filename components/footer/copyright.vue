<!-- 0.1.0 -->
<script lang="ts" setup>
// ------------- Data
const data = {
  tools: "en/tools/",
  CV: "en/cv/scrum",
  CVn: "en/cv/",
  CVf: "en/cv/frontend",
}

const storage = useCounterStore();
</script>

<template>
  <div class="copyright">
    <div v-if="storage.isProduction">
      <hr />
      {{ $t("projects") }}:
      <div class="copyright-links">
        <span v-for="(k, i) in data" :key="i">
          <NuxtLink :to="k">{{ $t(i) }}</NuxtLink>
          <span class="divider">|</span>

        </span>
      </div>
    </div>
    <hr />
    <div>
      {{ $t("copyright_footer") }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.divider {
  padding-left: 5px;
  padding-right: 5px;
}

.copyright-links {
  display: inline;

  span:last-child {
    .divider {
      display: none;
    }
  }
}
</style>
