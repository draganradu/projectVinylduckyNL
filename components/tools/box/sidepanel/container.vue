<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Hooks
const toolStore = useCounterStoreTools();

// ------------- Data
const collapse = ref(false);

// ------------- Logic
const toggleCollapse = () => {
  collapse.value = !collapse.value
}

</script>

<template>
  <div id="sidepanel" :class="[collapse ? 'collapsed' : '']">
    <div :class="['card']">
      <div class="card-body">
        <h5 class="card-title" @click="toggleCollapse">
          <BootstrapIcon name="arrow-bar-left" v-if="collapse" />
          <BootstrapIcon name="arrow-bar-right" v-else />
          <span class="co">Sidepanel</span>
        </h5>
        <h6 class="card-subtitle mb-2 text-body-secondary co">Card subtitle</h6>

        <ToolsBoxSidepanelInput />
        <ToolsBoxSidepanelSearchResults />

        <ToolsBoxSidepanelSelectedbox />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$collapsed: 400px;
$unCollapsed: 50px;


#sidepanel {
  .card {
    position: fixed;
    top: 0;
    right: 0;
    bottom:0;
  }
}

#sidepanel:not(.collapsed) {
  width: $collapsed;

  .card-body {
    width: $collapsed;
  }
}

#sidepanel.collapsed {
  width: $unCollapsed;

  .card-body {
    width: $unCollapsed;
  }
}


.collapsed {
  .co {
    display: none;
  }
}

h5 span {
  margin-left: 10px;
}
</style>