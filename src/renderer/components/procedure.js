export default class procedure {
    inputs = {
        "title": {
            type: "text",
            title: "Titel",
            description: "Hvilken titel skal proceduren have?",
            value: "",
            placeholder: "Titel"
        },
        "category": {
            type: "select-category",
            title: "Kategori",
            description: "Hvilken kategori tilhører proceduren?",
            value: "",
            category: "procedurekategorier",
            options: []
        },
        "kontrol": {
            type: "radio-select",
            title: "Relation til en allerede oprettet kontrol?",
            description: "Er der oprettet en kontrol som denne procedure er relateret til?",
            value: "",
            placeholder: "Hvilken kontrol?",
            category: "kontroller",
            options: []
        },
        "upload": {
            type: "upload",
            title: "Upload dokument",
            value: []
        }
    }
}

export let filter = {
    "title": { checked: true, text: "Navn" },
    "dateCreated": { checked: false, text: "Oprettet", format: "date" },
    "dateEdited": { checked: true, text: "Redigeret", format: "date" },
}