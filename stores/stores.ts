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
          "content": "scrum_body_text",
          "url": "scrum",
          "color": "2"
        },
        vinylShop: {
          "title": "Vinyl Shop",
          "subtitle": "Signs and Stickers",
          "content": "vinyl_body_text",
          "color": "3"
        },
        cutOnDemand: {
          "title": "Vinyl Cut",
          "subtitle": "Signs and Stickers",
          "content": "cut_body_text",
          "color": "4",
          "url": "vinylShop/ServicesCutOnDemand",
        },
        largeFormatPrint: {
          "title": "Large Format Print",
          "subtitle": "Large format Print on demand",
          "content": "print_body_text",
          "color": "5",
          "url": "vinylShop/ServicesPrintOnDemand",
        },
      },
      socialMedia :{
        "instagram": "https://www.instagram.com/vinylduckynl/",
        "git": "https://github.com/draganradu/projectVinylduckyNL",
        "behance": "https://www.behance.net/vinylducky",
        "twitter": "https://x.com/vinylduckynl",
        "youtube": "https://www.youtube.com/channel/UCLxGVQzx9ZIp2JsIGmRQVtA",
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

