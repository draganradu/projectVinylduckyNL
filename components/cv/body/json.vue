<script lang="ts" setup>
import { indexOf, object } from 'underscore';

const store = cvStore()

const hideKey = (key: string) => {
  const regex = new RegExp('^\\$|^\\_|^get|showVerbose|generateID|inputData|checkDigit|time|verbose|currentQuery')
  return regex.test(key)
}

const isCvFilter = (array: string[] | CvQuery[]) => {
  return array.every((d: string) => [CvQuery.frontend, CvQuery.scrum].includes(d as CvQuery))
}

const CvFilter = (array: string[] | CvQuery[]) => {
  //@ts-ignore
  const data = array[store.currentQuery];
  if (Array.isArray(data) && data.length === 3) {
    return data[2]
  }
  return data
}

const isObject = (d: any) => {
  return typeof d === 'object' && d !== null && !Array.isArray(d)
}

const test = (d: any) => {
  console.log(d)
}

const cleaner = (dirtyBoy: any) => {
  const cleanBoy = { ...dirtyBoy }

  Object.keys(cleanBoy).forEach((keyL1: string) => {
    if (hideKey(keyL1)) {
      delete cleanBoy[keyL1]
    } else if (isObject(cleanBoy[keyL1])) {
      // pass to l1
      // -- is a scrum front filterer

      if (isCvFilter(Object.keys(cleanBoy[keyL1]))) {
        const filter = CvFilter(cleanBoy[keyL1])
        if (filter) {
          cleanBoy[keyL1] = CvFilter(cleanBoy[keyL1])
        }
      }
    }

    if (isObject(cleanBoy[keyL1])) {
      Object.keys(cleanBoy[keyL1]).forEach((keyL2: string) => {
        // pass to l2
        if (isCvFilter(Object.keys(cleanBoy[keyL1][keyL2]))) {
          const filter = CvFilter(cleanBoy[keyL1][keyL2])
          if (filter) {
            cleanBoy[keyL1][keyL2] = CvFilter(cleanBoy[keyL1][keyL2])
          }
        }

        if (Array.isArray(cleanBoy[keyL1][keyL2]) && isObject(cleanBoy[keyL1][keyL2][0])) {
          Object.keys(cleanBoy[keyL1][keyL2]).forEach((keyL3: string) => {
            if ("Experience" === keyL2) {
              Object.keys(cleanBoy[keyL1][keyL2][keyL3]).forEach((keyL4: string) => {
                if ("description" === keyL4) {
                  console.log(cleanBoy[keyL1][keyL2][keyL3][keyL4], "xa", keyL1, keyL2, keyL3, keyL4)
                  cleanBoy[keyL1][keyL2][keyL3][keyL4] = cleanBoy[keyL1][keyL2][keyL3][keyL4][2]
                }
              })
            }
          })
        }
      })
    }
  })
  return cleanBoy
}


</script>
<template>
  <pre class="code vd-size-normal">{{ JSON.stringify(cleaner(store), undefined, 2) }}</pre>
</template>

<style lang="scss">
.code {
  padding: 20px;
  white-space: break-spaces;
  word-wrap: break-word;
}
</style>