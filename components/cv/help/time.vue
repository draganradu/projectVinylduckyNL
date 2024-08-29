<script lang="ts" setup>
// ------------- Props
const props = defineProps(['time'])

class LogicTime {

  private _from: any
  private _to: any
  private from: any
  private to: any

  constructor(input: any[]) {
    this._from = input[0]
    this._to = input[1]

    this.from = this.buildNewDate(this._from)
    this.to = this.buildNewDate(this._to)
  }

  get outputFrom() {
    return this.buildGet(this.from)
  }
  get outputTo() {
    return this.buildGet(this.to)
  }

  get duration() {
    const workingDate = new Date(this.to.getTime() - this.from.getTime())
    const years = workingDate.getUTCFullYear() - 1970
    const months = workingDate.getUTCMonth()
    return [years, months]
  }

  get durationString() {
    const workingDate = this.duration
    let workingString = []
    if(workingDate[0] > 0) {
      workingString.push(workingDate[0] + " years")
    }
    if(workingDate[1] > 0) {
      workingString.push((workingDate[1] + 1)  + " months")
    }

    return workingString.join(", ")

  }

  buildNewDate(stringDate: any) {

    if (stringDate === 0) {
      return new Date()
    }
    return new Date(stringDate)
  }

  buildGet(date: any) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = date.getMonth()
    const year = date.getFullYear()
    return [year, monthNames[month]].join(" ")
  }
}

const outputDate = new LogicTime(props.time)

</script>

<template>
  <span class="vd-size-normal vd-size-regular">{{ outputDate.outputFrom }} - {{ outputDate.outputTo }} ({{ outputDate.durationString }})</span>
</template>