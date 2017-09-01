<template>
    <page>
        <template slot="content">
            <archive :filter="filter" @New="New" :data="data">
                <template slot="empty-text">
                    Dokument-arkivet er alsidigt. Arkivet bør anvendes til alt dokumentation der ikke kan henføres under de andre menu-punkter. Således vil databehandleraftaler, IT-sikkerhedsrapporter eller lign. naturligt kunne uploades her.
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
import { filter } from './dokument.js'
import mixin from '@/components/archive/archiveMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            dokumenter: [],
            dokumentkategorier: [],
            database: { category: "dokumentkategorier", documents: "dokumenter" },
            filter: filter,
            settings:{
                groupedBy:"category"
            }
        }
    }
}

</script>

<style>

</style>