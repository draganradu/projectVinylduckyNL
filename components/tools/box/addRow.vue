<script setup lang="ts">
const toolStore = useStoreTools();
const showModal = ref(false);

const add = (size: number) => {
  showModal.value = !showModal;
  toolStore.addRow({
    id: "dd",
    in: new Array(size).fill({ content: "m4", rules: "xx" })
  });
};
</script>

<template>
  <div class="add-row-btn">
    <BootstrapIcon v-if="!showModal" name="plus-square-fill" @click="showModal = !showModal" />
    <BootstrapIcon v-else name="dash-square" @click="showModal = !showModal" />
    <div v-if="showModal" class="card shadow-lg" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="i in boxSize" @click="add(i)">{{ i }}</li>
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