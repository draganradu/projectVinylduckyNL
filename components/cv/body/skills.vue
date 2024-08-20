<script lang="ts" setup>
const store = cvStore()

</script>

<template>
  <section>
    <div>
      <h2>
        <BootstrapIcon name="backspace-fill" />
        Skills
      </h2>
    </div>
    {{ store.getSkills.join(", ") }}
  </section>
</template>