<script lang="ts" setup>
const store = cvStore()

const buildPosition = (d: string | string[]) => {
  if (d instanceof Array) {
    return d.join(" / ")
  }
  return d
}

const outputData = store.getBaseInfo(['sections', 'Experience'])

</script>

<template>
  <section>
    <CvBodySectionTitle icon="backspace-fill" text="Experience" />
    <div v-if="outputData.length > 0">
      <div class="ex-line" v-for="(d, k ) in outputData" :key="k">
        <h5>{{ buildPosition(d.position) }}</h5>
        <h6>{{ d.company }} | {{ d.type }}</h6>
        <CvHelpTime :time="d.when" />
        <p>{{ d.description[store.verbose.level] }}</p>
        <p>Skills: {{ d.skills.join(", ") }}</p>
      </div>
    </div>
    <div v-else>
      No Data
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ex-line {

  h5,
  h6 {
    font-size: 1em;
  }

  h6 {
    font-weight: 400;
  }

  &+& {
    border-top: 1px solid black;
    padding-top: 10px;
  }
}
</style>