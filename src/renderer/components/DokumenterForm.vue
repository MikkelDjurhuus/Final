<template>
    <slider>
        <template slot="slider-content">
            <form-page>
                <template slot="title">Nyt dokument</template>
                <template slot="content">
                    <form-helper :inputs="inputs" template="two-columns">
                    </form-helper>
                </template>
            </form-page>
        </template>
    </slider>
</template>

<script>
import { bus } from '@/main';
export default {
    data() {
        return {
            inputs: {
                "title": {
                    type: "text",
                    title: "Titel",
                    description: "Hvilket titel skal dokumentet have?",
                    value: "",
                    placeholder: "Titel"
                },
                "category": {
                    type: "select-category",
                    title: "Kategori",
                    description: "Hvilket titel skal dokumentet have?",
                    value: "",
                    category: "dokumentkategorier",
                    options: []
                },
                "relation": {
                    type: "radio-select",
                    title: "Har dokumentet tilknytning til en behandlingsaktivitet?",
                    description: "Hvis dokumentet tilhører en allerede oprettet behandlingsaktivitet kan dette tilkendegives her.Således kan dokumentet agere uddybning eller anden dokumentation for en behandlingsaktivitet virksomheden allerede har oprettet.",
                    value: "",
                    placeholder: "Hvilken behandlingsaktivitet?",
                    category: "behandlingsaktiviteter",
                    options: []
                },
                "date": {
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
        }
    },
    created() {
        bus.$on('Submit', data => { this.Submit() });
    },
    methods: {
        Submit() {
            Database.Insert("dokumenter", this.GetValues(this.inputs)
            ).then((result) => {
                console.log(result)
                bus.$emit('Close');
            })
        },
        GetValues(inputs) {
            let obj = {}
            for (let key in inputs) {
                if (inputs.hasOwnProperty(key)) {
                    let value = inputs[key].value;
                    obj[key] = value;
                }
            }
            return obj;
        }
    }
}
</script>

<style>

</style>
