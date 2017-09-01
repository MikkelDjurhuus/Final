<template>
    <page>
        <template slot="content">
            <archive :filter="filter" @New="New" :data="data">
                <template slot="empty-text">
                    En procedurer er en fremgangsmåde eller en manual for hvordan virksomheden ønsker en bestemt handling udført. Der kan knytte sig procedurer til behandlingsaktiviteter, kontroller eller henvendelser der fortæller hvordan den enkelte situation skal håndteres i overensstemmelse med virksomhedens politikker.
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
import { filter } from './procedure.js'
import mixin from '@/components/archive/archiveMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            database: { category: "procedurekategorier", documents: "procedurer" },
            procedurer: [],
            procedurekategorier: [],
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