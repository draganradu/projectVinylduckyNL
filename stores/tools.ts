import Fuse from 'fuse.js';

// 0 | Store types
export type boxRow = { id: string, highlight?: boolean, in: { content: string, rule?: string, highlight?: boolean }[] }

export type StoreTools = {
  boxes: boxRow[][],
  searchResult: Searchable[] | []
}

export type Searchable = { id: [number, number, number], content: string, rule?: string }

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
            id: "surubu plastic", in: [
              { content: "cepuri", rule: "<5 3 4 5" }, 
              { content: "cepuri", rule: "6" }, 
              { content: "cepuri", rule: "8" }, 
              { content: "cepuri", rule: '10' },

              { content: "suruburi plastic", rule: "4" }, 
              { content: "suruburi plastic", rule: "6" }, 
              { content: "suruburi plastic", rule: "8" }, 
              { content: "suruburi plastic", rule: '' },

              { content: "bits", rule: "pz2" }, 
              { content: "m4", rule: "xx" }, 
              { content: "m4", rule: "xx" }, 
              { content: "m4", rule: 'm4' },
            ]
          },
          {
            id: "middle empty", in: [
              { content: "", rule: "" }, 
              { content: "", rule: "" },
              { content: "", rule: "" },
              { content: "", rule: "" },

              { content: "", rule: "" }, 
              { content: "", rule: "" },
              { content: "", rule: "" },
              { content: "", rule: "" },

              { content: "", rule: "" }, 
              { content: "", rule: "" },
              { content: "", rule: "" },
              { content: "", rule: "" },
            ]
          },
          {
            id: "middle empty", in: [
              { content: "", rule: "" }, 
              { content: "L braket", rule: "" },

              { content: "Bicicleta", rule: "" }, 
              { content: "Q Brick separatoare", rule: "" },
            ]
          },
        ],
        [
          {
            id: "hole screw T", in: [
              { content: "3.5 x <25", rule: "hole screw T" }, 
              { content: "3.5 x 35", rule: "hole screw T" }, 
              { content: "3.5 x 50", rule: "hole screw T" }, 
              { content: "3.5 x 75", rule: "hole screw T" }, 

              { content: "5 x <25", rule: "hole screw T" }, 
              { content: "5 x 35", rule: "hole screw T" }, 
              { content: "5 x 50", rule: "hole screw T" }, 
              { content: "5 x 75", rule: "hole screw T" }, 

              { content: "8 x <25", rule: "hole screw T" }, 
              { content: "8 x 35", rule: "hole screw T" }, 
              { content: "8 x 50", rule: "hole screw T" }, 
              { content: "8 x 75", rule: "hole screw T" }, 
            ]
          }, 
        ],
        [
          {
            id: "hole screw V", in: [
              { content: "3.5 x <25", rule: "hole screw v" }, 
              { content: "3.5 x 35", rule: "hole screw V" }, 
              { content: "3.5 x 50", rule: "hole screw V" }, 
              { content: "3.5 x 75", rule: "hole screw v" }, 

              { content: "5 x <25", rule: "hole screw V" }, 
              { content: "5 x 35", rule: "hole screw V" }, 
              { content: "5 x 50", rule: "hole screw V" }, 
              { content: "5 x 75", rule: "hole screw V" }, 

              { content: "8 x <25", rule: "hole screw V" }, 
              { content: "8 x 35", rule: "hole screw V" }, 
              { content: "8 x 50", rule: "hole screw V" }, 
              { content: "8 x 75", rule: "hole screw v" }, 
            ]
          },

          {
            id: "dibluri", in: [
              { content: "<6", rule: "Dibluri" }, 
              { content: "3.5 x 35", rule: "hole screw T" }, 
              { content: "3.5 x 50", rule: "hole screw T" }, 
              { content: "3.5 x 75", rule: "hole screw T" }, 

              { content: "5 x <25", rule: "hole screw T" }, 
              { content: "5 x 35", rule: "hole screw T" }, 
              { content: "5 x 50", rule: "hole screw T" }, 
              { content: "5 x 75", rule: "hole screw T" }, 

              { content: "8 x <25", rule: "hole screw T" }, 
              { content: "8 x 35", rule: "hole screw T" }, 
              { content: "8 x 50", rule: "hole screw T" }, 
              { content: "8 x 75", rule: "hole screw T" }, 
            ]
          },
        ],
        [
          {
            id: "bc", in: [
              { content: "flat", rule: "super rule" },
            ]
          },
        ],
      ],
      searchResult: [],
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

      addHighlight() {
        this.searchResult.forEach((item) => {
          this.boxes[item.id[0]][item.id[1]].in[item.id[2]].highlight = true
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

      searchableStructure() {
        const temp = [] as Searchable[]
        for (let i = 0; i < this.boxes.length; i++) {
          for (let j = 0; j < this.boxes[i].length; j++) {
            for (let k = 0; k < this.boxes[i][j].in.length; k++) {
              const { content, rule } = this.boxes[i][j].in[k]
              temp.push({ id: [i, j, k], content, rule })
            }
          }
        }

        return temp
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
        const flat = this.searchableStructure()

        const results = new Fuse(flat, {
          threshold: 0.4,
          minMatchCharLength: 2,
          keys: ['content', 'rule'],
        })
          .search(searchValue)
          .map((x) => {
            return x.item
          });

        this.searchResult = results

        // what rule apply
        this.runApplyRules(searchValue)
        // highlight box
        this.removeHighlight()
        this.addHighlight()
        // show sidebar text

        // after search
      },
    },
  })