<script setup lang="ts">
const store = cvStore()

const showPanel = ref(false)
const togglePanel = () => {
  showPanel.value = !showPanel.value
}

const { inputData } = store

const generateID = async() => {
  inputData.dbID = store.generateID()
  store.checkDigit = await sha256(inputData.dbID)
}

const sha256 = async (message: any) => {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex.slice(0, 4);
}



generateID()

</script>

<template>
  <div class="container vb-p-b-1 no-print">
    <div class="d-flex justify-content-between align-items-center">
      <VdDropdown />
      <BootstrapIcon :name="showPanel ? `caret-up-square` : `caret-down-square`" class="vb-p-l-1"
        @click="togglePanel" />
    </div>
    <div class="vb-p-t-1" v-show="showPanel">
      <div class="card">
        <div class="card-body input-s">
          <div>
            <label class="form-label d-flex justify-content-between">
              DB ID
              <BootstrapIcon name="arrow-clockwise" @click="generateID" />
            </label>
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