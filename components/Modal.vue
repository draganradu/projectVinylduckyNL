<script setup>
const appStore = useCounterStore();

const toggleModal = () => {
  appStore.toggleModal()
}
</script>

<template>
  <div class="modal-background">
    <div id="modal" class="modal d-block" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Hi there stranger,</h5>
            <!-- <button type="button" @click="toggleModal" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button> -->
          </div>
          <div class="modal-body">
            <p>We are currently working on a new project so our usual response time is no longer as prompt as it used to
              be. As usual we will respond with a spring in our step and a smile in our heart, just not as prompt. </p>
            <p>We appreciate your patience.</p>
            <p>
              We are currently held up by a new project, if you need to contact us you email us at
                yellow@vinylducky.nl or
                by phone 0648459980. We are happy to have a chat.
            </p>
                
                <dl class="row">
                  <dt class="col-sm-2">KVK:</dt>
                  <dd class="col-sm-9">88701778</dd>
                  <dt class="col-sm-2">VAT:</dt>
                  <dd class="col-sm-9">NL004641406B81</dd>
                  <dt class="col-sm-2">IBAN:</dt>
                  <dd class="col-sm-9"> NL02KNAB0606447458</dd>
                </dl>
                
            
            <SocialMedia />
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" href="mailto:yellow@vinylducky.nl"><BootstrapIcon name="envelope-heart-fill" /> Email</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
