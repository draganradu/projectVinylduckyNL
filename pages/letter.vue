<script lang="ts" setup>
const textarea = ref('[x]')
const store = cvStore()


const date = new Date();

const nth = (d:number) => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

const warning = (string:string) => {
  const regex = new RegExp('\\[|\\]')
  return regex.test(string)
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dencember'];

</script>
<template>
  <div class="letter-page">
    <textarea class="no-print form-control letter-textarea" v-model="textarea" rows="10">text area </textarea>
    <div class="page text-white">
      <div v-if="warning(textarea)">warning !!!</div>
      <div class="row">
        <div class="col">
          <p class="letter-small"><b>{{ store.personalInfo.name }}</b></p>
          <p class="letter-small">{{ store.personalInfo.jobTitle[CvQuery.scrum] }}</p>
          <p class="letter-small">{{ store.personalInfo.location }} | {{ store.personalInfo.zipCode }}</p>
          <p class="letter-small">E: {{ store.personalInfo.contact.email }} | P: {{ store.personalInfo.contact.phone }}</p>
          <p class="letter-small">{{ date.getDate() }}{{ nth(date.getDate()) }} of {{ months[date.getMonth()] }} {{ date.getFullYear() }}</p>

          <p class="main-text letter-normal">Dear Hiring Manager, 
            <br/>{{ textarea }}</p>

          
          <p class="letter-normal">Best regards, <br />Radu Dragan</p>
          <div class="signature"> <img src="/img/Dalia_Grybauskaitė.Signature.svg" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.letter-page {
  padding: 100px;
  background-color: #313d59;
  -webkit-print-color-adjust: exact;
  min-height: 130vh;
  height: 100%;
  white-space: pre-wrap;
  p {
    margin-bottom: 0;
  }

  .letter-small,
  .letter-normal {
    font-size: 12px;
  }

  .signature {
    width: 200px;
    position: relative;
    top: -20px;
    transform: rotate(-10deg);
    img {
      width: 100%;
    }
  }

  .main-text {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.letter-textarea {
  padding-bottom: 50px;
}

</style>