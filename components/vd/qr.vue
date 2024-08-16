<script lang="ts" setup>
// ------------- Props
const props = defineProps({
  text: { type: String, default: "Example" },
  color: { type: String, default: "66-168-192" },
});

// ------------- Logic

class qrLogic {
  
  private apiUrl: string;
  private data: { data: string, format: string, color: string };

  constructor(props: { text: string, color: string }) {
    this.apiUrl = "https://api.qrserver.com/v1/create-qr-code/"
    this.data = {
      data: props.text,
      format: "svg",
      color: props.color
    }
  }
  buildUrl() {
    const searchParam = Object.keys(this.data).reduce((acc: string[], key: string) => {
      return [...acc, `${key}=${this.data[key]}`]
    }, [])
    return this.apiUrl + "?" + searchParam.join("&");
  }

  update() {
    this.data = {
      data: props.text,
      format: "svg",
      color: props.color
    }
  }
}

const logic = new qrLogic(props)

watch(() => props.text, (newQuestion, oldQuestion) => {
  logic.update()
})

// https://goqr.me/api/doc/create-qr-code/

</script>

<template>
  <div class="qr">
    <img :src="logic.buildUrl()" />
  </div>
</template>

<style lang="scss" scoped>
.qr {
  img {
    width: 100%;
  }

  background-color: white;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>