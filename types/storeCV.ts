export enum CvQuery {
  frontend = 'frontend',
  scrum = 'scrum',
}

export type cvStrings = {
  [CvQuery.frontend]?: string | string[],
  [CvQuery.scrum]: string | string[],
} | {
  [CvQuery.frontend]: string | string[],
  [CvQuery.scrum]?: string | string[],
}

export type cvSections = { [key in CvQuery]: string }

export type CvExperience = {
  company: string,
  type: string,
  position: string | string[],
  where: string,
  when: [number | [number, number], number | [number, number]],
  description: string | string[],
  skills: string[]
  level?: 0 | 1 | 2
}