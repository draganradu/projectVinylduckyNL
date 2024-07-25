<script setup lang="ts">
const props = defineProps(["row"]);
const toolStore = useCounterStoreTools();

const showModal = ref(false);

const add = (size: number) => {
  showModal.value = !showModal;
  toolStore.addRow({
    id: "dd",
    size: size,
    content: "m4",
    rules: "xx",
  });
};
</script>

<template>
  <div class="add-row-btn">
    <BootstrapIcon
      v-if="!showModal"
      name="plus-square-fill"
      @click="showModal = !showModal"
    />
    <BootstrapIcon v-else name="dash-square" @click="showModal = !showModal" />
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

<style lang="scss" scoped>
.add-row-btn {
    padding-top: 20px;
    padding-left: 150px;
}

</style>