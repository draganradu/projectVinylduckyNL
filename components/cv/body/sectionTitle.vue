<script lang="ts" setup>
const props = defineProps({
  icon: { type: String, default: "person-bounding-box" },
  text: { type: String, default: "Summery" }
})
</script>

<template>
  <div class="title">
    <h2>
      <BootstrapIcon :name="icon" class="icon" />
      {{ text }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.title {
  .icon {
    background-color: black;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 13px;
    font-size: 15px;
    // display: inline-block;
    // padding-bottom: 5px;
    vertical-align: middle;
  }
  border-bottom: 1px solid black;
  margin-bottom: 20px;
}
</style>