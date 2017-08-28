<template>
    <slider>
        <template slot="slider-content">
            <form-page :database="database">
                <template slot="title">{{title}}</template>
                <template slot="content">
                    <form-helper :inputs="inputs" template="two-columns">
                    </form-helper>
                </template>
            </form-page>
        </template>
    </slider>
</template>

<script>
import dokument from './dokument.js';
console.log("dokument", dokument)
import mixin from '@/components/form/formMixin.js';
export default {
    mixins: [mixin],
    data() {
        return {
            inputs: new dokument().inputs,
            database: { category: "dokumentkategorier", documents: "dokumenter" },
            title: ""
        }
    }, methods: {
        onCreated() {
            this.title = this.editing ? "Rediger dokument" : "Nyt dokument";
        },
    }
}
</script>

<style>

</style>