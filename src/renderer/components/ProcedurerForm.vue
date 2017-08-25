<template>
    <slider>
        <template slot="slider-content">
            <form-page>
                <template slot="title">Nyt procedure</template>
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
                inputs: procedure,
                database: "procedurer"
            }
        }
    }

</script>

<style>

</style>