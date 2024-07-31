<script setup lang="ts">
// ------------- init
const toolStore = useCounterStoreTools();

const props = defineProps({ 
  row: {
    type: Number,
    default: 1
  } 
});
const showModal = ref(false);

const add = (size: number) => {
  showModal.value = !showModal;
  toolStore.addBox(props.row, {
    id: "dd",
    size: size,
    content: "m4",
    rules: "xx",
  });
};
</script>

<template>
  <div type="button" :class="['add-btn', !showModal ? 'show-on-hover' : '']">
    <BootstrapIcon v-if="!showModal" name="plus-square-fill" class="text-success" @click="showModal = !showModal" />
    <BootstrapIcon v-else name="dash-square" @click="showModal = !showModal" class="text-success" />
    <div v-if="showModal" class="card shadow-lg" style="width: 18rem">
      <ul class="list list-group list-group-flush">
        <li class="list-group-item" v-for="i in boxSize" @click="add(i)">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.add-btn {
  text-align: right;
  position: absolute;
  right: 10px;
}

.list {
  position: relative;
  z-index: 1;
}
</style>