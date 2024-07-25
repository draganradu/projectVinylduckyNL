export const useCounterStoreTools = defineStore(
  {
    id: "toolsData",
    state: () => ({ boxes: [
      [
        {id: "aa", size: 4, content :"m4", rules: "xx"},
        {id: "bb", size: 12, content :"m4", rules: "xx"},
        {id: "bb", size: 9, content :"m4", rules: "xx"},
      ],
      [
        {id: "cc", size: 2, content :"m4", rules: "xx"},
      ],
      [
        {id: "dd", size: 1, content :"m4", rules: "xx"},
      ]
    ] }),
    getters: {
      rowSize: (state) => {
        const totalSize = state.boxes.reduce(
          (accumulator, currentValue: any) => {
            const rowSize = currentValue.length
            return accumulator > rowSize ? accumulator : rowSize 
          },
          1,
        );

        return totalSize

      }
    },
    actions: {
      addBox(row: number, item: any) {
        this.boxes[row].push(item)
      },  
      addRow(item: any) {
        this.boxes.push([item])
      },
    },
  })