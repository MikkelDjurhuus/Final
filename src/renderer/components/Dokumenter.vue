<template>
    <page>
        <template slot="content">
            <archive :filter="filter" :data="dokumenter" @New="New">
                <template slot="empty-text">
                    Dokument-arkivet er alsidigt. Arkivet bør anvendes til alt dokumentation der ikke kan henføres under de andre menu-punkter. Således vil databehandleraftaler, IT-sikkerhedsrapporter eller lign. naturligt kunne uploades her.
                </template>
                <template slot="content">
                    <list>
                        <template slot="list-header">
                            <h3 v-for="(item,index) in filter" :class='getClass' v-if="item.checked">{{item.text}}</h3>
                        </template>
                        <template slot="list-content">
                            <list-category v-for="(item,index) in groupByCategory()" :data="item.documents" :category="item.category" :key="index" :database="database"></list-category>
                        </template>
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
            filter: filter
        }
    }
}

</script>

<style>

</style>