<script lang="ts" setup>
const props = defineProps({
  icon: { type: String, default: "person-bounding-box" },
  text: { type: String, default: "Summery" }
})
</script>

<template>
  <div class="title">
    <h2 class="vd-size-x-large vd-size-medium">
      <BootstrapIcon :name="icon" class="icon" />
      {{ text }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.title {
  .icon {
    -webkit-print-color-adjust: exact;
    background-color: black;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 8px;
    vertical-align: middle;
  }
  border-bottom: 1px solid black;
  margin-bottom: 20px;
}
</style>