import _ from 'underscore'

export type cvStore = {
  personalInfo: {
    image: string,
    name: string,
    jobTitle: cvStrings,
    location: string,
    contact: { [key: string]: string },
    certifications: string[],
    language: { [key: string]: string },
  },
  sections: {
    Summary: cvSections,
    Experience: cvSections,
    Education: {
      what: string,
      in: string,
      where: string,
      when: [number, number],
    }[],
  },
  currentQuery: string,
  verbose: {
    data: string[],
    level: number,
  }
}

type cvStrings = {
  frontend?: string | string[],
  scrum: string | string[],
} | {
  frontend: string | string[],
  scrum?: string | string[],
}

export type cvSections = {

}

export const cvStore = defineStore({
  id: 'cvData',
  state: (): cvStore => {
    return {
      personalInfo: {
        image: "/img/radu-dragan-aurel-scrum-frontend-developer.jpg",
        name: "Radu Dragan",
        jobTitle: {
          frontend: "Frontend Developer",
          scrum: "Scrum Master"
        },
        location: "Eindhoven Netherlands",
        contact: {
          email: "radu.dragan@vinylducky.nl",
          phone: "0648459980",
          linkedin: "www.linkedin.com/in/radu-aureldragan-0a894172",
          company: "vinylducky.nl",
          git: "https://github.com/draganradu",
          npm: "https://www.npmjs.com/package/simple-color-converter"
        },
        certifications: ["PSM", "SAFe 6.1"],
        language: {
          english: "Fluent",
          dutch: "Basic",
          romanian: "Basic",
          hungarian: "Basic",
        }
      },
      sections: {
        "Summary": {

        },
        "Education": [
          {
            what: "MBA",
            in: "Business Management and Engineering",
            where: "Polytechnics University of Bucharest",
            when: [2018, 2022],
          },
          {
            what: "MA",
            in: "Design and Multimedia",
            where: "University of Art and Design Bucharest",
            when: [2010, 2012],
          },
          {
            what: "BA",
            in: "Digital Design and Photography",
            where: "University of art Cluj-Napoca",
            when: [2007, 2010],
          },
        ],
        "Experience": {

        }
      },
      currentQuery: "",
      verbose: {
        data: [
          "a bit",
          "a lot",
          "all of it",
          "json",
          "wireFrame",
          "scrum",
        ],
        level: 1
      }
    }
  },
  getters: {
    getBaseInfo: (state: cvStore) => {
      return (url: string[]): string => {
        const data = _.get(state, url)
        let currentData = ""

        if (!_.has(data, state.currentQuery)) {
          currentData = _.get(state, [...url, state.currentQuery]) as string
        } else {
          const keys = Object.keys(data as any)
          currentData = _.get(state, [...url, keys[0]]) as string
        }

        return currentData
      }
    }
  }
})