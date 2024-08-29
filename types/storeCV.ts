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