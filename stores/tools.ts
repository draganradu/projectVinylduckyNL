// 0 | Store types
export type boxRow = { id: string, size: number, content: string, rules: string }

export type StoreTools = {
  boxes: boxRow[][]
}

// 1 | Store Data
export const useCounterStoreTools = defineStore(
  {
    id: "toolsData",
    state: (): StoreTools => ({
      boxes: [
        [
          { id: "aa", size: 4, content: "m4", rules: "xx" },
          { id: "bb", size: 12, content: "m4", rules: "xx" },
          { id: "bb", size: 9, content: "m4", rules: "xx" },
        ],
        [
          { id: "cc", size: 2, content: "m4", rules: "xx" },
        ],
        [
          { id: "dd", size: 1, content: "m4", rules: "xx" },
        ]
      ]
    }),

    getters: {
      rowSize: (state: StoreTools): number => {
        const totalSize = state.boxes.reduce(
          (accumulator: number, currentValue: boxRow[]) => {
            const rowSize = currentValue.length
            return accumulator > rowSize ? accumulator : rowSize
          },
          1,
        );

        return totalSize
      }
    },

    actions: {
      addBox(row: number, item: boxRow) {
        this.boxes[row].push(item)
      },
      addRow(item: boxRow) {
        this.boxes.push([item])
      },
    },
  })