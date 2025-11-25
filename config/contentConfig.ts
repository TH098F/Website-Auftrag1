import config from "./baseConfig";

import * as coachingServiceText from "./coachingService.md";
import * as teamCoachingServiceText from "./teamCoachingService.md";

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
        name: "Teamcoaching Tagesworkshop",
        description: await teamCoachingServiceText.compiledContent(),
        image: "hands1.png"
    }
];

export const cssVars = {
    baseColor: config.colors.base,
    baseDarkColor: config.colors.base_dark,
    accentColor: config.colors.accent,
};