const capitalize = (s: string): string => {
  return s[0].toUpperCase() + s.slice(1);
}
// TODO: ECBGI-118
export type SeoObject = any

enum SeoEnum {
  title = 'title',
  ogTitle = 'ogTitle',
  description = 'description',
  ogDescription = 'ogDescription',
  ogImage = 'ogImage',
  twitterCard = 'twitterCard',
}

export const seoService: SeoObject = (seoRequest: {
  [key in SeoEnum]: string
}) => {

  const superSeo: SeoObject = {};

  [SeoEnum.title, SeoEnum.description].forEach((key: SeoEnum) => {
    if (seoRequest[key]) {
      superSeo[key] = seoRequest[key]
      superSeo[`og${capitalize(key)}`] = seoRequest[key]
    }
  })

  return { ...seoDefaultStructure, ...seoRequest } as SeoObject
}

export const seoDefaultStructure = {
  title: 'Vinyl Ducky - Signs and Stickers',
  ogTitle: 'Vinyl Ducky - Signs and Stickers',
  description: 'We are currently working on a new project so our usual response time is no longer as prompt as it used to be. As usual, we will respond with a spring in our step and a smile in our hearts, just not as prompt.',
  ogDescription: 'We are currently working on a new project so our usual response time is no longer as prompt as it used to be. As usual, we will respond with a spring in our step and a smile in our hearts, just not as prompt.',
  ogImage: 'https://vinylducky.nl/img/vinyl-ducky-logo-signs-and-stickers-nederlands-eindhoven.png',
  twitterCard: 'summary_large_image',
}

