
<template>
    <page>
        <template slot="content">
            <archive :filter="filter" :data="henvendelser" @New="New">
                <template slot="empty-text">Henvendelser anvendes til at dokumentere når et datasubjekt gør brug af dens rettigheder. Således vil der skulle oprettes en ”henvendelse” hver gang en person tager kontakt til virksomheden med henblik på, at udøve en rettighed efter persondataforordningen. Eksempelvis kan den registrerede bede virksomheden redegøre for hvilke data, som virksomheden ligger inde med vedrørende personen. </template>
                <template slot="content">
                    <list v-for="(group,key) in listData" :key="key">
                        <template slot="list-header">
                            <th v-for="(item,index) in filter" :class='getClass' v-if="item.checked">{{item.text}}</th>
                        </template>
                        <template slot="list-content">
                            <list-item v-for="(item,index) in group" :data="item" :key="index"></list-item>
                        </template>
                    </list>
                </template>
            </archive>
        </template>
    </page>
</template>

<script>
import listitem from '@/components/archive/list/ListItem'
import { filter } from './henvendelse.js'
import mixin from '@/components/archive/archiveMixin.js'
export default {
    mixins: [mixin],
    components: {
        "list-item": listitem
    },
    data() {
        return {
            database: { category: "henvendelsekategorier", documents: "henvendelser" },
            henvendelser: [],
            henvendelsekategorier: [],
            filter: filter,
            settings: {
                grouped: "status",
                extraFilter: true
            }
        }
    }
}

</script>

<style>

</style>