<script lang="ts" setup>
const store = cvStore()
</script>

<template>
  <section class="main-body-section">
    <div class="title">
      <h2>        
        <BootstrapIcon name="person-bounding-box" class="icon" />
        Summery
      </h2>
    </div>
    <p>
      {{ store.getBaseInfo(['sections','Summary'], true) }}
    </p>
  </section>
</template>