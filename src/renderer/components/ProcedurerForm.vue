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
import procedure from './procedure.js'
import mixin from '@/components/form/formMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            inputs: new procedure().inputs,
            database: { category: "procedurekategorier", documents: "procedurer" },
            title: ""
        }
    },
    methods: {
        onCreated() {
            this.title = this.editing ? "Rediger procedure" : "Ny procedure";
        }
    }
}

</script>

<style>

</style>