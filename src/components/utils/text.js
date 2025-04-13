let texts = {}

texts.title = ["Zocchi", "Zocchi"]

export function displayText(key, language) {
    if(language.toLowerCase() == "fr") {
        return texts[key][0]
    }
    return texts[key][1]
}