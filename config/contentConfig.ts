import config from "./baseConfig";

import * as coachingServiceText from "./coachingService.md";
import * as hypnoseService from "./hypnoseService.md";
import * as aboutMeText from "./aboutme.md";
import * as hynoseText from "./hypnoseInfo.md"

interface Service {
    name: string,
    description: string,
    image: string,
};

export const serviceList: Service[] = [
    {
        name: "Telefonische Erstberatung",
        description: "<p>Ca. 20 Minuten</p> <p>Kostenfrei</p>",
        image: "telefon.jpeg"
    },
    {
        name: "Persönliches Coaching/Beratung",
        description: await coachingServiceText.compiledContent(),
        image: "raum1.jpeg"
    },
    {
        name: "Hypnose",
        description: await hypnoseService.compiledContent() + `<a style="color:black;" href=${"/" + config.base + "/hypnose"}>Mehr Informationen zu Hypnose findest du hier</a>`,
        image: "hypnose1.jpeg"
    }
];

export const aboutMe = await aboutMeText.compiledContent();
export const hypnose = await hynoseText.compiledContent();

export const cssVars = {
    baseColor: config.colors.base,
    baseDarkColor: config.colors.base_dark,
    accentColor: config.colors.accent,
};