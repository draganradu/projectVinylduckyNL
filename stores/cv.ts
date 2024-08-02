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
    Experience: cvSections
    Education: cvSections
  }
  verboseLevel: number
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
        "Education": {

        },
        "Experience": {

        }
      },
      verboseLevel: 0
    }
  },
})