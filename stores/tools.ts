import Fuse from 'fuse.js';

// 0 | Store types
export type boxRow = { id: string, highlight?: boolean, in: { content: string, rule?: string, highlight?: boolean }[] }

export type StoreTools = {
  boxes: boxRow[][]
}

type ruleOperator = (data: string) => boolean
const superA: ruleOperator = (data: string) => {
  return data.length === 6
}

const logicRules: { [key: string]: ruleOperator } = {
  m4: (data: string) => {
    return data.length === 6
  },
}

// 1 | Store Data
export const useCounterStoreTools = defineStore(
  {
    id: "toolsData",
    state: (): StoreTools => ({
      boxes: [
        [
          {
            id: "aa", in: [
              { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: 'm4' }
            ]
          },
          {
            id: "ab", in: [
              { content: "m2", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }
            ]
          },
          {
            id: "ac", in: [
              { content: "m20", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" }
            ]
          },
        ],
        [
          {
            id: "ba", in: [
              { content: "m4", rule: "xx" }, { content: "m4", rule: "xx" },
            ]
          },
        ],
        [
          {
            id: "bc", in: [
              { content: "m4", rule: "xx" },
            ]
          },
        ],
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
      },
      longestRow: (state: StoreTools): number => {
        return state.boxes.reduce(
          (accumulator: number, currentValue: boxRow[]) => {
            const rowSize = currentValue.length
            return accumulator > rowSize ? accumulator : rowSize
          },
          1,
        );
      }
    },

    actions: {
      addBox(row: number, item: boxRow) {
        this.boxes[row].push(item)
      },
      addRow(item: boxRow) {
        this.boxes.push([item])
      },
      removeBox() {
        const newList = [...this.boxes]
        newList.splice(0, 1)
        this.boxes = newList
      },

      addHighlight(text: string) {
        this.boxes.forEach((row) => {
          row.forEach((item) => {
            item.in.forEach((itemIn) => {
              if (itemIn.rule === text) {
                itemIn.highlight = true
              }
            })
          })
        })
      },
      removeHighlight() {
        this.boxes.forEach((row) => {
          row.forEach((item) => {
            item.in.forEach((itemIn) => {
              itemIn.highlight = false
            })
          })
        })
      },

      runApplyRules(searchValue: string) {
        this.boxes.forEach((row) => {
          row.forEach((item) => {
            item.in.forEach((itemIn) => {
              if (itemIn.rule && logicRules[itemIn.rule]) {
                // logic rule
                // console.log("we have a logic rule")
              } else {
                // string rule
                // console.log("we have a string rule")
              }
            })
          })
        })
      },
      runSearch(searchValue: string) {
        // fuz test

        const flat = JSON.parse(JSON.stringify(this.boxes.flat()))
        const results = new Fuse(flat, {
          threshold: 0.4,
          minMatchCharLength: 2,
          keys: ['in.content', 'in.rules', 'id'],
        })
          .search(searchValue)
          .map((x) => {
            return x.item
          }) as boxRow[];

          const highlightBox = results.reduce((acc: any, item: any) => {
            return [...acc, item.id]
          },[])

          const highlightDrawer = new Fuse(results[0].in, {
            threshold: 0.4,
            minMatchCharLength: 2,
            keys: ['content', 'rule'],
          })
          .search(searchValue)
          .map((x) => {
            return x.item
          }).reduce((acc: any, item: any) => {
            return [...acc, item.content]
          },[])

        console.log(highlightBox, highlightDrawer);


        // what rule apply
        this.runApplyRules(searchValue)
        // highlight box
        this.removeHighlight()
        this.addHighlight(searchValue)
        // show sidebar text

        // after search
        console.log("xa", searchValue)
      },
    },
  })