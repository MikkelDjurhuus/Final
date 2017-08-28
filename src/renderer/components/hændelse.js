export default class Hændelse {
    inputs = [
    {
        "regards": {
            type: "textarea",
            title: "Hændelse omhandlede",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae dolor ligula. Vivamus sed leo finibus lacus posuere aliquam sed scelerisque magna.",
            value: "",
            placeholder: "Indtast her"
        },
        "dateRecieved": {
            type: "datepicker",
            title: "Hændelse modtaget d.",
            description: "Forklaring: Vælg en dato hvor virksomheden skal gennemgå dokumentet og sikre sig at det stadig indeholder relevant og opdateret information.",
            value: "",
        },
        "consequence": {
            type: "textarea",
            title: "Konsekvens af hændelse",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae dolor ligula. Vivamus sed leo finibus lacus posuere aliquam sed scelerisque magna.",
            value: "",
            placeholder: "Indtast her"
        },
        "actionsTaken": {
            type: "textarea",
            title: "Foranstaltninger iværksat",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae dolor ligula. Vivamus sed leo finibus lacus posuere aliquam sed scelerisque magna.",
            value: "",
            placeholder: "Indtast her"
        }
    },
    {
        "correctionDate": {
            type: "datepicker",
            title: "Dato for udbedring",
            description: "Forklaring: Vælg en dato hvor virksomheden skal gennemgå dokumentet og sikre sig at det stadig indeholder relevant og opdateret information.",
            value: "",
        },
        "risk": {
            type: "radio",
            title: "Risiko for fysiske personers rettigheder?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
            value: false,
        },
        "reported": {
            type: "radio",
            title: "Anmeldt til DT?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
            value: false,
        },
        "ansvarlig": {
            type: "select",
            title: "Ansvarlig",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
            value: "",
            placeholder: "Vælg en af nedenstående",
            category: "ansvarlige",
            options: []
        }
    }]
}

export let filter = {
    "title": { checked: true, text: "Navn" },
    "dateReEvaluate": { checked: true, text: "Dato for revidering", format: "date" },
    "dateCreated": { checked: false, text: "Oprettet", format: "date" },
    "dateEdited": { checked: true, text: "Redigeret", format: "date" },
}