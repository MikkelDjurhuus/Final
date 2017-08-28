<template>
    <page>
        <template slot="content">
            <archive :filter="filter" :data="procedurer" @New="New">
                <template slot="empty-text">
                    En procedurer er en fremgangsmåde eller en manual for hvordan virksomheden ønsker en bestemt handling udført. Der kan knytte sig procedurer til behandlingsaktiviteter, kontroller eller henvendelser der fortæller hvordan den enkelte situation skal håndteres i overensstemmelse med virksomhedens politikker.
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
import { filter } from './procedure.js'
import mixin from '@/components/archive/archiveMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            database: { category: "procedurekategorier", documents: "procedurer" },
            procedurer: [],
            procedurekategorier: [],
            filter: filter
        }
    },
}

</script>

<style>

</style>