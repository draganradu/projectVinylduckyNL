<script lang="ts" setup>
const store = cvStore()

const buildPosition = (d: string | string[]) => {
  if(d instanceof Array) {
    return d.join(" / ")
  }
  return d
}

</script>

<template>
  <section>
    <div>
      <h2>
        <BootstrapIcon name="backspace-fill" />
        Experience
      </h2>
    </div>
    <div class="ex-line" v-for="(d, k ) in store.getBaseInfo(['sections','Experience'])" :key="k">
      <h5>{{ buildPosition(d.position) }}</h5>
      <h6>{{ d.company }} | {{ d.type }}</h6>
      <p>{{ d.when }}</p>
      <p>{{ d.description[store.verbose.level] }}</p>
      <p>Skills: {{ d.skills.join(", ") }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ex-line {
  h5, h6 {
    font-size: 1em;
  }

  h6 {
    font-weight: 400;
  }

  & + & {
    border-top: 1px solid black;
    padding-top: 10px;
  }
}

</style>