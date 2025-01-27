import Fuse from 'fuse.js';
import boxData from './mockData/boxes.json';

// 0 | Store types
export type boxRow = { id: string, highlight?: boolean, in: { content: string, rule?: string, highlight?: boolean }[] }

export type StoreTools = {
  boxes: boxRow[][],
  searchResult: Searchable[] | [],
  selectedBox: { 
    showSelected: boolean, 
    id: [number, number] 
  }
}

export type Searchable = { id: [number, number, number], content: string, rule?: string }


// 1 | Store Data
export const useCounterStoreTools = defineStore(
  {
    id: "toolsData",
    state: (): StoreTools => ({
      boxes: boxData as boxRow[][],
      searchResult: [],
      selectedBox: {
        showSelected: false,
        id: [0, 0],
      },
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

      runSearch(searchValue: string) {
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

        // highlight box
        this.removeHighlight()
        this.addHighlight()
      },

      selectABox(id: [number, number]) {
        this.selectedBox.id = id
        this.selectedBox.showSelected = true
      },
      deSelectABox() {
        this.selectedBox.showSelected = false
      },

    },
  })