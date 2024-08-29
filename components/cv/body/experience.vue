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
        <h5 class="vd-size-normal vd-size-regular">{{ buildPosition(d.position) }}</h5>
        <h6 class="vd-size-large"><b>{{ d.company }}</b><span class="vd-size-light"> | {{ d.type }}</span></h6>
        <CvHelpTime :time="d.when" />
        <p class="vd-size-normal vd-size-regular">{{ d.where }}</p>
        <p class="vd-size-normal vd-size-regular indent">{{ d.description[store.verbose.level] }}</p>
        <p class="vd-size-normal skills">
          <b class="vd-size-medium">Skills: </b>
          <span class="vd-size-light">{{ buildSkills(d.skills, store.verbose.level) }}</span>
        </p>
      </div>
    </div>
    <div v-else>
      No Data
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ex-line {
  margin-bottom: 20px;
  break-inside: avoid;

  padding-bottom: 20px;


  p {
    margin-bottom: 10px;
  }

  .indent {
    padding-left: 15px;
    border-left: 1px solid rgba($color: #000000, $alpha: 0.2);
  }
}

@page {
  size: auto;
  margin: 70px 0mm 25px 25px;
}

@page :first {
  margin: 0mm 0mm 0mm 25px;
}
</style>