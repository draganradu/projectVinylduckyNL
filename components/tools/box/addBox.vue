<script setup lang="ts">
// ------------- init
const toolStore = useCounterStoreTools();

const props = defineProps({ 
  row: {
    type: Number,
    required: true
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
  <div type="button" class="add-btn">
    <BootstrapIcon v-if="!showModal" name="plus-square-fill" class="text-success" @click="showModal = !showModal" />
    <BootstrapIcon v-else name="dash-square" @click="showModal = !showModal" class="text-success" />
    <div v-if="showModal" class="card shadow-lg" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" @click="add(1)">1</li>
        <li class="list-group-item" @click="add(2)">2</li>
        <li class="list-group-item" @click="add(4)">4</li>
        <li class="list-group-item" @click="add(9)">9</li>
        <li class="list-group-item" @click="add(12)">12</li>
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
</style>