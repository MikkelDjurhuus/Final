
<template>
    <page>
        <template slot="content">
            <archive :filter="filter" :data="hændelser" @New="New">
                <template slot="empty-text">
                    Hændelser anvendes til at dokumentere når et datasubjekt gør brug af dens rettigheder. Således vil der skulle oprettes en ”henvendelse” hver gang en person tager kontakt til virksomheden med henblik på, at udøve en rettighed efter persondataforordningen. Eksempelvis kan den registrerede bede virksomheden redegøre for hvilke data, som virksomheden ligger inde med vedrørende personen.
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
import { filter } from './hændelse.js'
import mixin from '@/components/archive/archiveMixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            database: { category: "hændelsekategorier", documents: "hændelser" },
            hændelser: [],
            hændelseskategorier: [],
            filter: filter
        }
    },
}

</script>

<style>

</style>