<script setup lang="ts">
const store = cvStore()

const showPanel = ref(false)
const togglePanel = () => {
  showPanel.value = !showPanel.value
}


const { inputData } = store

</script>

<template>
  <div class="container vb-p-b-1">
    <div class="d-flex justify-content-between align-items-center">
      <VdDropdown />
      <BootstrapIcon :name="showPanel ? `caret-up-square` : `caret-down-square`" class="vb-p-l-1"
        @click="togglePanel" />
    </div>
    <div class="vb-p-t-1" v-show="showPanel">
      <div class="card">
        <div class="card-body input-s">
          <div>
            <label class="form-label">DB ID</label>
            <input type="text" v-model="inputData.dbID" class="form-control" />
          </div>

          <div>
            <label class="form-label">Name of company</label>
            <input type="text" v-model="inputData.companyName" class="form-control" />
          </div>

          <div>
            <label for="exampleInputEmail1" class="form-label">Application Link</label>
            <input type="text" v-model="inputData.applicationLink" class="form-control" aria-describedby="emailHelp" />
          </div>

          <div>
            <label for="exampleInputEmail1" class="form-label">Date: {{ store.time }}</label>
          </div>

          <div>
            <label for="exampleInputEmail1" class="form-label">Check Digit: {{ store.checkDigit }}</label>
          </div>

          <CvHelpHeaderLink />

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-s {
  &>div+div {
    margin-top: 20px;
  }
}
</style>