export default class kontrol {
    inputs=[{
    "title": {
        type: "text",
        title: "Titel",
        description: "Hvilken titel skal kontrollen have?",
        value: "",
        placeholder: "Titel"
    },
    "description": {
        type: "textarea",
        title: "Beskrivelse",
        description: "Formålet med kontrollen, samt hvad kontrollen indebærer. Såfremt virksomheden ikke har oprettet en procedure for kontrollens udførsel bør denne beskrivelse være udførlig.",
        value: "",
        placeholder: "Beskrivelse "
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
    "procedure": {
        type: "radio-select",
        title: "Har kontrollen en procedure?",
        description: "Har kontrollen en procedure tilknyttet der sikrer en ensartet udførsel i hele virksomheden.",
        value: "",
        placeholder: "Hvilken procedure?",
        category: "procedurer",
        options: []
    }
}, {
    "ansvarlig": {
        type: "select",
        title: "Hvem er ansvarlig for kontrollen?",
        description: "Hvem har det interne ansvar for at kontrollen bliver udført. Bemærk at denne person ikke nødvendigvis behøver at forestå udførslen men kan i stedet varetage den overordnede kontrol.",
        value: "",
        placeholder: "Vælg en af nedenstående",
        category: "ansvarlige",
        options: []
    },
    "interval": {
        type: "select-radiogroup",
        title: "Kontrollen skal udføres første gang d.",
        value: [1,'w'],
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        radio: [{val:"d",text:"Dag"},{val:"w",text:"Uge"},{val:"m",text:"Måned"},{val:"å",text:"År"}]
    },
    "startDate": {
        type: "datepicker",
        title: "Kontrollen skal udføres første gang d.",
        value: Date.now(),
    }
}]}

export let filter = {
    "title": { checked: true, text: "Navn" },
    "ansvarlig": { checked: true, text: "Ansvarlig" },
    "interval": { checked: true, text: "Interval", format: "interval" },
    "dateCreated": { checked: false, text: "Oprettet", format: "date" },
    "dateEdited": { checked: false, text: "Redigeret", format: "date" },
    // "forfalden": { checked: true, text: "Forfalden", format: "date" },
}