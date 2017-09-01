
<template>
    <page>
        <template slot="content">
            <archive :filter="filter" @New="New" :data="data">
                <template slot="empty-text">Henvendelser anvendes til at dokumentere når et datasubjekt gør brug af dens rettigheder. Således vil der skulle oprettes en ”henvendelse” hver gang en person tager kontakt til virksomheden med henblik på, at udøve en rettighed efter persondataforordningen. Eksempelvis kan den registrerede bede virksomheden redegøre for hvilke data, som virksomheden ligger inde med vedrørende personen. </template>
                <template slot="content">
                    <list v-if="data1 !== undefined" :settings="settings" :data="data1" :filter="filter1">
                    </list>
                    <list v-if="data2 !== undefined" :settings="settings" :data="data2" :filter="filter2">
                    </list>
                    <list v-if="data3 !== undefined" :settings="settings" :data="data3" :filter="filter3">
                    </list>
                </template>
            </archive>
        </template>
    </page>
</template>

<script>
import list from '@/components/archive/list/list'
import { filter } from './henvendelse.js'
import mixin from '@/components/archive/archiveMixin.js'
export default {
    mixins: [mixin],
    components: {
        "list": list
    },
    data() {
        return {
            settings: {},
            henvendelser:[],
            henvendelsekategorier:[],
            filter: filter,
            database: {
                documents: "henvendelser",
                category: "henvendelsekategorier"
            }
        }
    },
    computed: {
        grouped: function() {
            return _.groupBy(this.data, obj => {
                return obj.status;
            })
        },
        data1: function() {
            return this.grouped["Modtaget"];
        },
        data2: function() {
            return this.grouped["Under behandling"];
        },
        data3: function() {
            return this.grouped["Færdigbehandlet"];
        },
        filter1: function() {
            return {
                ...this.filter,
                "dateRecieved": { checked: true, required: true, text: "Henvendelse modtaget d.", format: "date" }
            }
        },
        filter2: function() {
            return {
                ...this.filter,
                "dateStarted": { checked: true, required: true, text: "Henvendelse påbegyndt d.", format: "date" }
            }
        },
        filter3: function() {
            return {
                ...this.filter,
                "dateProcessed": { checked: true, required: true, text: "Henvendelse færdigbehandlet d.", format: "date" }
            }
        }
    }
}

</script>

<style>

</style>