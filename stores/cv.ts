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
  topSkills: { [key: string]: string[] },
  interests: { [key: string]: string[] },
  sections: {
    Summary: cvSections,
    Experience: cvSections,
    Education: {
      what: string,
      in: string,
      where: string,
      when: [number, number],
      verboseMin?: number,
    }[],
  },
  currentQuery: string,
  verbose: {
    data: string[],
    level: number,
  },
  inputData: {
    [key: string]: string,
  },
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
          english: "Full Professional",
          dutch: "Elementary",
          romanian: "Native or Bilingual",
          hungarian: "Elementary",
        }
      },
      topSkills: {
        frontend: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum", "UI/UX Design"],
        scrum: ["Scrum Master", "Problem solving", "Development thinking", "Design thinking"]
      },
      interests: {
        frontend: ["Building Cargo Bikes", "Kayaking", "DIY", "traveling"],
        scrum: ["Building Bikes", "Fixing things"]
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
            verboseMin: 1
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
        level: 0
      },
      inputData: {
        dbID: "1234",
        companyName: "company",
        applicationLink: "link",
      }
    }
  },
  getters: {
    getBaseInfo: (state: cvStore) => {
      return (url: string[]): string => {
        const data = _.get(state, url)
        let currentData = ""

        if (typeof data === "string") {
          return data
        }

        if (state.currentQuery && _.has(data, state.currentQuery)) {
          currentData = _.get(state, [...url, state.currentQuery]) as string
        } else {
          const keys = Object.keys(data as any)
          currentData = _.get(state, [...url, keys[0]]) as string
        }
        return currentData
      }
    },
    time(): string {
      const date = new Date();
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    },
    checkDigit(): string {
      return "1123"
    },
    buildQrData(): string {
      console.log(this.inputData)
      return encodeURIComponent(JSON.stringify({
        ...this.inputData,
        verbose: this.verbose.level,
        time: this.time,
        checkDigit: this.checkDigit,
      }))
    },
    showVerbose(state: cvStore) {
      return (level?: number) => {
        if (level === undefined) { return true }
        else if (state.verbose.level >= level) { return true }
        return false
      }
    }
  }
})