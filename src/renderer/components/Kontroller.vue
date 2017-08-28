<template>
    <page>
        <template slot="content">
            <archive :data="kontroller" :settings="settings" :categories="kontroltegorier" :database="database">
                <template slot="empty-text">
                        En procedurer er en fremgangsmåde eller en manual for hvordan virksomheden ønsker en bestemt handling udført.
                        Der kan knytte sig procedurer til behandlingsaktiviteter, kontroller eller henvendelser der fortæller hvordan den enkelte situation skal håndteres i overensstemmelse med virksomhedens politikker. 
                </template>
            </archive>
        </template>
    </page>
</template>

<script>
    import { filter } from './kontrol.js'
    import mixin from '@/components/archive/archiveMixin.js'
    export default {
        mixins:[mixin],
        data() {
            return {
                database: { category: "kontrolkategorier", documents: "kontroller" },
                kontroller: [],
                kontroltegorier: [],
                settings: {
                    filter: filter,
                    sorting: [0, "asc"],
                    grouping: "category"
                }
            }
        },
    }

</script>

<style>

</style>