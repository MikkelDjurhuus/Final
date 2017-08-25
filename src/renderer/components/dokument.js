export default {
    "title": {
        type: "text",
        title: "Titel",
        description: "Hvilken titel skal dokumentet have?",
        value: "",
        placeholder: "Titel"
    },
    "category": {
        type: "select-category",
        title: "Kategori",
        description: "Hvilken kategori tilhører have?",
        value: "",
        category: "dokumentkategorier",
        options: []
    },
    "behandlingsaktivitet": {
        type: "radio-select",
        title: "Har dokumentet tilknytning til en behandlingsaktivitet?",
        description: "Hvis dokumentet tilhører en allerede oprettet behandlingsaktivitet kan dette tilkendegives her.Således kan dokumentet agere uddybning eller anden dokumentation for en behandlingsaktivitet virksomheden allerede har oprettet.",
        value: "",
        placeholder: "Hvilken behandlingsaktivitet?",
        category: "behandlingsaktiviteter",
        options: []
    },
    "dateReEvaluate": {
        type: "datepicker",
        title: "Dokumentet skal revideres d.",
        description: "Forklaring: Vælg en dato hvor virksomheden skal gennemgå dokumentet og sikre sig at det stadig indeholder relevant og opdateret information.",
        value: "",
    },
    "upload": {
        type: "upload",
        title: "Upload dokument",
        value: []
    }
}

export let filter = {
    "title": {checked: true, text: "Navn"},
    "dateReEvaluate": {checked: true, text: "Dato for revidering" ,format:"date"},
    "dateCreated": {checked: false, text: "Oprettet",format:"date"},
    "dateEdited": {checked: true, text: "Redigeret",format:"date"},
}