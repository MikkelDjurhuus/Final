<template>
    <page>
        <template slot="content">
            <archive :data="dokumenter" :settings="settings" :categories="dokumentkategorier" :database="database">
                <template slot="empty-text">
                    Dokument-arkivet er alsidigt. Arkivet bør anvendes til alt dokumentation der ikke kan henføres under de andre menu-punkter.
                    Således vil databehandleraftaler, IT-sikkerhedsrapporter eller lign. naturligt kunne uploades her.
                </template>
            </archive>
        </template>
    </page>
</template>

<script>
    import { filter } from './dokument.js'
    import mixin from '@/components/archive/archiveMixin.js'
    export default {
        mixins:[mixin],
        data() {
            return {
                database: { category: "dokumentkategorier", documents: "dokumenter" },
                dokumenter: [],
                dokumentkategorier: [],
                settings: {
                    filter: filter,
                    sorting: [0, "asc"],
                    grouping: "category"
                }
            }
        }
    }

</script>

<style>

</style>