export default class henvendelse {
    inputs = [
        {
            "sender": {
                type: "cluster",
                title: "Henvendelse fra",
                description: "Stamdata på den registrerede der har henvendt sig til virksomheden",
                value: {
                    "Navn": "",
                    "Adresse": "",
                    "By": "",
                    "Mail": "",
                    "Telefon": "",
                }
            },
            "dateRecieved": {
                type: "datepicker",
                title: "Henvendelse modtaget d.",
                description: "Dato for modtagelse af henvendelsen.",
                value: "",
            },
            "dateStarted": {
                type: "datepicker",
                title: "Henvendelse påbegyndt d.",
                description: "Den dato virksomheden begyndte behandlingen af henvendelsen.",
                value: "",
            }
        },
        {
            "dateProcessed": {
                type: "datepicker",
                title: "Henvendelse behandlet d.",
                description: "Den dato henvendelsen var færdigbehandlet.",
                value: "",
            },
            "regards": {
                type: "textarea",
                title: "Henvendelse omhandlede",
                description: "Henvendelsens overordnede indhold samt formålet med henvendelse. Herunder særligt hvilke rettigheder den registrerede ønskede at udøve ved sin kontakt til virksomheden.",
                value: "",
                placeholder: "Indtast her"
            },
            "reaction": {
                type: "textarea",
                title: "Virksomheden har reageret på følgende måde",
                description: "Beskrivelse af de processer virksomheden har iværksat for at behandle henvendelsen.",
                value: "",
                placeholder: "Indtast her"
            },
            "documents": {
                type: "upload",
                title: "Upload dokumentation",
                value: "",
            },
        }]
}

export let filter = {
    "sender": { required: true, checked: true, text: "Navn", format: "Navn" },
    "status": { required: true, checked: true, text: "Status" },
    "dateCreated": { checked: false, text: "Oprettet", format: "date" },
    "dateEdited": { checked: false, text: "Redigeret", format: "date" },
    extra: {
        "Modtaget": {
            "dateRecieved": { checked: true, required: true, text: "Henvendelse modtaget d.", format: "date" },
        },
        "Under behandling": {
            "dateStarted": { checked: true, required: true, text: "Henvendelse påbegyndt d.", format: "date" },
        },
        "Færdigbehandlet": {
            "dateProcessed": { checked: true, required: true, text: "Henvendelse færdigbehandlet d.", format: "date" },
        },required: true
    }

}