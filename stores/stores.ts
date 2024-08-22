// 0 | Store types
export type page = {
  title: string,
  subtitle: string,
  content: string,
  url?: string,
  color: string,
  text_color?: string
}

export interface pageStore {
  [key: string]: page
}

export type mainStore = {
  version: string,
  modes: {
    modalOpen: boolean,
    maintenance: boolean,
    error: boolean,
  },
  pages: pageStore,
  socialMedia: { [key: string]: string }
  isProduction: boolean
}

// 1 | Store Data
export const useCounterStore = defineStore({
  id: 'appData',
  state: (): mainStore => {
    return {
      version: "0.0.2",
      modes: {
        modalOpen: true,
        maintenance: true,
        error: true,
      },
      pages: {
        scrum: {
          title: "Scrum Master",
          subtitle: "Safe 6.1 Agile Team coach",
          content: "scrum_body_text",
          url: "scrum",
          color: "2"
        },
        vinylShop: {
          title: "Vinyl Shop",
          subtitle: "Signs and Stickers",
          content: "vinyl_body_text",
          color: "3",
          text_color: "2"
        },
        cutOnDemand: {
          title: "Vinyl Cut",
          subtitle: "Signs and Stickers",
          content: "cut_body_text",
          color: "4",
          url: "vinylShop/ServicesCutOnDemand",
        },
        largeFormatPrint: {
          title: "Large Format Print",
          subtitle: "Large format Print on demand",
          content: "print_body_text",
          color: "5",
          url: "vinylShop/ServicesPrintOnDemand",
          "text_color": "1"
        },
      },
      socialMedia: {
        "instagram": "https://www.instagram.com/vinylduckynl/",
        "git": "https://github.com/draganradu/projectVinylduckyNL",
        "behance": "https://www.behance.net/vinylducky",
        "twitter": "https://x.com/vinylduckynl",
        "youtube": "https://www.youtube.com/channel/UCLxGVQzx9ZIp2JsIGmRQVtA",
      },
      isProduction: (() => {
        return true
      })()
    }
  },

  getters: {
    getUrl: (state: mainStore) => {
      return (url: string) => {
        return state.pages[url]['url'] || url
      }
    },
  },

  actions: {
    toggleModal(value?: boolean) {
      if (value !== undefined) {
        this.modes.modalOpen = value
      } else {
        this.modes.modalOpen = !this.modes.modalOpen
      }
    }
  }
})
