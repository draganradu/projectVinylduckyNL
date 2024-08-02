<!-- 0.1.0 -->
<script setup lang="ts">
// ------------- Init and Import
const appStore = useCounterStore();

// ------------- Logic
const toggleModal = () => {
  appStore.toggleModal();
};
</script>

<template>
  <div v-if="!!appStore.modes.modalOpen" class="modal-background">
    <div id="modal" class="modal d-block" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("modal_landing_hi") }}</h5>
            <button type="button" @click="toggleModal" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p v-html="$t('modal_landing_body', {
              email: compVdContact.email,
              phone: compVdContact.phone,
              b: '<b>',
              be: '</b>',
            })
              "></p>

            <dl class="row">
              <span v-for="(key, value) in compVdData" :key="key" class="row">
                <dt class="col-sm-2">{{ value }}:</dt>
                <dd class="col-sm-9">{{ key }}</dd>
              </span>
            </dl>

            <SocialMedia />
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" href="mailto:yellow@vinylducky.nl">
              <BootstrapIcon name="envelope-heart-fill" /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-background {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 100vh;
}

.modal-in-view {
  max-height: 100vh;
  overflow-y: hidden;
}
</style>
