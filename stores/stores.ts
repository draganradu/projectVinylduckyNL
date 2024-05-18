export const useCounterStore = defineStore({
  id: 'appData',
  state: () => {
    return {
      version: "0.0.1",
      modes: {
        modalOpen: true,
        maintenance: true,
        error: true,
      },
      pages: {
        scrum: {
          "title": "Scrum Master",
          "subtitle": "Safe 6.1 Agile Team coach",
          "content": "adsasdas",
          "url": "scrum",
          "color": "2"
        },
        vinylShop: {
          "title": "Vinyl Shop",
          "subtitle": "Signs and Stickers",
          "content": "adsasdas",
          "color": "3"
        },
        cutOnDemand: {
          "title": "Vinyl Cut",
          "subtitle": "Signs and Stickers",
          "content": "Cut on demand",
          "color": "4",
          "url": "vinylShop/ServicesCutOnDemand",
        },
        largeFormatPrint: {
          "title": "Large Format Print",
          "subtitle": "Large format Print on demand",
          "content": "adsasdas",
          "color": "5",
          "url": "vinylShop/ServicesPrintOnDemand",
        },
      },
      socialMedia :{
        "instagram": "https://www.instagram.com/vinylduckynl/",
      }
    }
  },
  getters: {
    getUrl: (state) => {
      return (url: string) => {

        // @ts-ignore
        return state.pages[url]['url'] || url
      }
    },
  },
  actions: {
    toggleModal() {
      this.modes.modalOpen = !this.modes.modalOpen
    }
  }
})

