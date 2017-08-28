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
import hændelse from './hændelse.js'
import mixin from '@/components/form/formMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            inputs: new hændelse().inputs,
            database: { category: "hændelsekategorier", documents: "hændelser" },
            title: ""
        }
    },
    methods: {
        onCreated() {
            this.title = this.editing ? "Rediger hændelse" : "Ny hændelse";
        }
    }
}

</script>

<style>

</style>