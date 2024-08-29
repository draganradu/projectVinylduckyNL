<script lang="ts" setup>
const store = cvStore()

const buildPosition = (d: string | string[]) => {
  if (d instanceof Array) {
    return d.join(" / ")
  }
  return d
}

const buildSkills = (d: string | string[], verboseLevel: number) => {
  if (d instanceof Array) {
    if (store.verbose.level === 0) {
      return d.slice(0, 5).join(", ")
    }
    if (store.verbose.level === 1) {
      return d.slice(0, 10).join(", ")
    }
    return d.join(", ")
  }
  return d
}

const showByLevel = (level: number) => {
  if (level === undefined) { return true }
  if (level <= store.verbose.level) {
    return true
  } else {
    return false
  }
}

const outputData = store.getBaseInfo(['sections', 'Experience'])

</script>

<template>
  <section>
    <CvBodySectionTitle icon="diagram-3" text="Experience" />
    <div class="text-break-spaces" v-if="outputData.length > 0">
      <div class="ex-line" v-for="(d, k ) in outputData" :key="k" v-show="showByLevel(d.level)">
        <h5>{{ buildPosition(d.position) }}</h5>
        <h6>{{ d.company }} | {{ d.type }}</h6>
        <CvHelpTime :time="d.when" />
        <p>{{ d.description[store.verbose.level] }}</p>
        <p><b>Skills:</b> {{ buildSkills(d.skills, store.verbose.level) }}</p>
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