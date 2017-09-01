<template>
    <page>
        <template slot="content">
            <archive :filter="filter" @New="New" :data="data">
                <template slot="empty-text">
                    Hændelser anvendes til at dokumentere når et datasubjekt gør brug af dens rettigheder. Således vil der skulle oprettes en ”henvendelse” hver gang en person tager kontakt til virksomheden med henblik på, at udøve en rettighed efter persondataforordningen. Eksempelvis kan den registrerede bede virksomheden redegøre for hvilke data, som virksomheden ligger inde med vedrørende personen.
                </template>
                <template slot="content">
                    <list :settings="settings" :data="data" :database="database" :filter="filter">
                    </list>
                </template>
            </archive>
        </template>
    </page>
</template>

<script>
import { filter } from './hændelse.js'
import mixin from '@/components/archive/archiveMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            database: { category: "hændelsekategorier", documents: "hændelser" },
            hændelser: [],
            hændelseskategorier: [],
            filter: filter,
            settings: {
                groupedBy: "category"
            }
        }
    },
}

</script>

<style>

</style>