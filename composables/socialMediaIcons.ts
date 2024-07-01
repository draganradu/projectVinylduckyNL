
const listbuild = (list: string[]) => {
    return list.reduce((acc, key) => {
        return { [key]: key, ...acc }
    }, {})
}
export const socialMediaIcons = (icon: string) => {
    console.log()
    const list: { [key: string]: string; } = {
        ...listbuild([
            "facebook", 
            "whatsapp", 
            "instagram", 
            "git", 
            "behance", 
            "twitter"
        ]),
    }

    if (list[icon]) {
        return list[icon]
    } else {
        return "award-fill"
        // return icon
    }

}
