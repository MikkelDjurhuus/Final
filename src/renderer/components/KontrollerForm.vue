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
import kontrol from './kontrol.js'
import mixin from '@/components/form/formMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            inputs: new kontrol().inputs,
            database: { category: "kontrolkategorier", documents: "kontroller" },
            title: ""
        }
    },
    methods: {
        onCreated() {
            this.title = this.editing ? "Rediger kontrol" : "Ny kontrol";
        },
        PreSubmit(doc) {
            if (!this.editing) {
                doc.underkontroller = [];
                doc.underkontroller.push({
                    deadline: doc.startDato,
                    description: "",
                    executed: false,
                });
            }
            return doc;
        }
    }
}

</script>

<style>

</style>