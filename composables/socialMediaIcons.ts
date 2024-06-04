export const socialMediaIcons = (icon: string) => {
    const list: { [key: string]: string; } = {
        facebook: 'facebook',
        whatsapp: 'whatsapp',
        instagram: 'instagram',
        git: 'github',
    }

    if (list[icon]) {
        return list[icon]
    } else {
        return "award-fill"
        // return icon
    }

}
