<template>
    <slider>
        <template slot="slider-content">
            <form-page :database="database">
                <template slot="title">{{title}}</template>
                <template slot="content">
                    <form-helper :inputs="inputs[0]" template="two-columns">
                    </form-helper>
                </template>
            </form-page>
            <form-page :database="database">
                <template slot="title">{{title}}</template>
                <template slot="content">
                    <form-helper :inputs="inputs[1]" template="two-columns">
                    </form-helper>
                </template>
            </form-page>
        </template>
    </slider>
</template>

<script>
import henvendelse from './henvendelse.js'
import mixin from '@/components/form/formMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            inputs: new henvendelse().inputs,
            database: { category: "henvendelsekategorier", documents: "henvendelser" },
            title: ""
        }
    },
    methods: {
        onCreated() {
            this.title = this.editing ? "Rediger henvendelse" : "Ny henvendelse";
        },
        PreSubmit(doc) {
            if (doc.dateProcessed == "") {
                if (doc.dateStarted == "") {
                    doc.status = "Modtaget";
                }
                else {
                    doc.status = "Under behandling";
                }
            } else {
                doc.status = "Færdigbehandlet";
            }
            return doc;
        }
    }
}

</script>

<style>

</style>