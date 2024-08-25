import _ from 'underscore'

enum CVquery {
  frontend = 'frontend',
  scrum = 'scrum',
}

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
      [key: string]: {
        company: string,
        type: string,
        position: string | string[],
        where: string,
        when: [number | [number, number], number | [number, number]],
        description: string | string[],
        skills: string[]
      }[]
    },
    Education: {
      what: string,
      in: string,
      where: string,
      when: [number, number],
      verboseMin?: number,
    }[],
  },
  currentQuery: CVquery | "",
  verbose: {
    data: string[],
    level: number,
  },
  inputData: {
    [key: string]: string,
  },
}

type cvStrings = {
  [CVquery.frontend]?: string | string[],
  [CVquery.scrum]: string | string[],
} | {
  [CVquery.frontend]: string | string[],
  [CVquery.scrum]?: string | string[],
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
          [CVquery.frontend]: "Frontend Developer",
          [CVquery.scrum]: "Scrum Master"
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
        [CVquery.frontend]: ["Vue/Nuxt", "Javascript/Typescript", "Problem solving", "Agile Scrum", "UI/UX Design"],
        [CVquery.scrum]: ["Scrum Master", "Problem solving", "Development thinking", "Design thinking"]
      },
      interests: {
        [CVquery.frontend]: ["Building Cargo Bikes", "Kayaking", "DIY", "traveling"],
        [CVquery.scrum]: ["Building Bikes", "Fixing things"]
      },
      sections: {
        Summary: {
          [CVquery.frontend]: [
            "I am a Frontend Developer with over 10 years of experience, I specialize in Vue/Nuxt, but I do not shy away from the occasional React or Typescript project. On the backend, I am a NodeJS developer to the bitter end. Just because I can share types between reports. On the management side, I am holding an up to date PSM and SAFe 6.1 certifications. One of my proudest achievements is leading a project that positioned my startup as a semifinalist in the Preactilerator Chivas the Venture in 2016, where my partner became a TEDx speaker.",
            "I am a Frontend Developer with over 10 years of experience, I specialize in Vue/Nuxt, but I do not shy away from the occasional React or Typescript project. On the backend, I am a NodeJS developer to the bitter end. Just because I can share types between reports. On the management side, I am holding an up to date PSM and SAFe 6.1 certifications. Colleagues often describe me as a builder of innovative digital solutions, and an effective organizer. Someone who can develop MVPs, learn from them and create plans for scaling. I understand the importance of delivering and testing features with real users in increments. One of my proudest achievements is leading a project that positioned my startup as a semifinalist in the Preactilerator Chivas the Venture in 2016, where my partner became a TEDx speaker. I am grateful for the opportunity to work with amazing international teams on various projects, from financial software in fintech companies like Verifone to medical hardware with Onera Health, and AI for health medical devices. I have learned that the greatest asset is the team.",
            "I am a Frontend Developer with over 10 years of experience, I am a big fan of Vue 3/Nuxt, but I do not shy away from the occasional React or Typescript project. On the backend, I am a NodeJS developer to the bitter end. Just because I can share types between Git reports. On the management side, I am holding an up to date PSM and SAFe 6.1 certifications. Colleagues often describe me as a builder of innovative digital solutions, and an effective organizer. Someone who can develop MVPs, learn from them and create plans for scaling. I understand the importance of delivering and testing features with real users in increments. By day, I am a dedicated Developer; by night, I build startups. One of my proudest achievements is leading a project that positioned my startup as a semifinalist in the Preactilerator Chivas the Venture in 2016, where my partner became a TEDx speaker. I am grateful for the opportunity to work with amazing international teams on various projects, from financial software in fintech companies like Verifone to medical hardware with Onera Health, and AI for health medical devices. I have learned that the greatest asset is the team. As a Senior Developer, I am dedicated to creating and mentoring teams to achieve their highest potential. While I recognize my limitations, I always focus on fostering a collaborative and productive environment, delivering high-quality code in testable increments, and leveraging continuous integration pipelines to better the deployment. My main motivation is to create the best experience for my clients. I am excited to work with you on your next project.",
          ],
          [CVquery.scrum]: [
            "I am a Scrum Master with over 5 years of experience, holding PSM and SAFe 6.1 certifications. With a solid background in software development spanning more than 10 years, I transitioned into the Scrum Master role after earning my Master's in Business from the Polytechnic University of Bucharest. Colleagues often describe me as a builder of innovative digital solutions, an effective organizer, and someone who can develop MVPs, learn from them, and create plans for scaling. I understand the importance of delivering and testing features with real users in increments. By day, I am a dedicated Scrum Master; by night, I build startups. One of my proudest achievements is leading a project that positioned my startup as a semifinalist in the Preactilerator Chivas the Venture in 2016, where my partner became a TEDx speaker. I am grateful for the opportunity to work with amazing international teams on various projects, from financial software in fintech companies like Verifone, to medical hardware with Onera Health, and AI for health medical devices. I have learned that the greatest asset is the team. As a Scrum Master, I am dedicated to creating and mentoring teams to achieve their highest potential. While I recognize my limitations, I always focus on fostering a collaborative and productive environment, delivering high-quality code in testable increments, and leveraging continuous integration pipelines.",
            "a bit longer scrum",
            "superlong scrum",
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
          [CVquery.frontend]: [
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
          [CVquery.scrum]: [

          ],

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
    },

    getSkills(state: cvStore) {
      let date: string[] = []
      console.log(state.currentQuery)
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