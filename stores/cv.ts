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
    Summary: { [key: string]: string[] },
    Experience: {
      [key in CvQuery]: {
        company: string,
        type: string,
        position: string | string[],
        where: string,
        when: [number | [number, number], number | [number, number]],
        description: string | string[],
        skills: string[]
      }[]
    },
    Projects: {
      [key in CvQuery]: {}[]
    },
    Education: {
      what: string,
      in: string,
      where: string,
      when: [number, number],
      verboseMin?: number,
    }[],
  },
  currentQuery: CvQuery | "",
  verbose: {
    data: string[],
    level: number,
  },
  inputData: {
    [key: string]: string,
  },
}

export const cvStore = defineStore({
  id: 'cvData',
  state: (): cvStore => {
    return {
      personalInfo: {
        image: "/img/radu-dragan-aurel-scrum-frontend-developer.jpg",
        name: "Radu Dragan",
        jobTitle: {
          [CvQuery.frontend]: "Frontend Developer",
          [CvQuery.scrum]: "Scrum Master"
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
        [CvQuery.frontend]: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum", "UI/UX Design"],
        [CvQuery.scrum]: ["Scrum Master", "Problem solving", "Development thinking", "Design thinking"]
      },
      interests: {
        [CvQuery.frontend]: ["Building Cargo Bikes", "Kayaking", "DIY", "traveling"],
        [CvQuery.scrum]: ["Building Bikes", "Fixing things"]
      },
      sections: {
        Summary: {
          [CvQuery.frontend]: [
            mkCvData.Summary[CvQuery.frontend][0],
            mkCvData.Summary[CvQuery.frontend][1],
            mkCvData.Summary[CvQuery.frontend][2]
          ],
          [CvQuery.scrum]: [
            mkCvData.Summary[CvQuery.frontend][0],
            mkCvData.Summary[CvQuery.frontend][1],
            mkCvData.Summary[CvQuery.frontend][3],
          ]
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
          [CvQuery.frontend]: [
            {
              company: "vinylDucky.nl",
              type: "ZZP",
              position: "Scrum Master",
              where: "Eindhoven, NL",
              when: [[2023, 10], 0],
              description: ["A", "B", "C"],
              skills: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum"],
            },
            {
              company: "Onera Health",
              type: "Full-Time",
              position: ["Scrum Master", "Frontend Developer"],
              where: "Eindhoven, NL",
              when: [[2022, 10], [2023, 10]],
              description: ["B", "C", "C"],
              skills: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum", "x"],
            },
            {
              company: "Meditools",
              type: "ZZP",
              position: ["Scrum Master", "Full Stack Developer"],
              where: "'s-Hertogenbosch, Netherlands",
              when: [[2021, 2], [2022, 9]],
              description: ["B", "C", "C"],
              skills: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum"],
            },
            {
              company: "2checkout now Verifone",
              type: "ZZP",
              position: ["Scrum Master", "Full Stack Developer"],
              where: "'s-Hertogenbosch, Netherlands",
              when: [[2021, 2], [2022, 9]],
              description: ["B", "C", "C"],
              skills: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum"],
            },
            {
              company: "Techdex",
              type: "ZZP",
              position: ["Scrum Master", "Full Stack Developer"],
              where: "'s-Hertogenbosch, Netherlands",
              when: [[2021, 2], [2022, 9]],
              description: ["B", "C", "C"],
              skills: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum"],
            },

            {
              company: "4PSA",
              type: "ZZP",
              position: ["Frontend Developer"],
              where: "'s-Hertogenbosch, Netherlands",
              when: [[2021, 2], [2022, 9]],
              description: ["B", "C", "C"],
              skills: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving"],
            },
          ],
          [CvQuery.scrum]: [

          ],
        },
        "Projects": {
          [CvQuery.frontend]: [],
          [CvQuery.scrum]: [

          ],
        },
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
      return (url: string[], verbose?: boolean): any => {
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

        if (verbose) {
          if (currentData[state.verbose.level]) {
            return currentData[state.verbose.level]
          } else {
            currentData[currentData.length - 1];
          }
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
    },

    getSkills(state: cvStore) {
      let date: string[] = []
      if (state.currentQuery) {
        state.sections.Experience[state.currentQuery].forEach(element => {
          date = [...date, ...element.skills]
        });

        return [...new Set(date)]
      }
      return []
    }
  }
})