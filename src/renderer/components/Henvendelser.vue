
<template>
    <page>
        <template slot="content">
            <!-- <archive :filter="filter" :data="henvendelser" @New="New">
                        <template slot="empty-text">Henvendelser anvendes til at dokumentere når et datasubjekt gør brug af dens rettigheder. Således vil der skulle oprettes en ”henvendelse” hver gang en person tager kontakt til virksomheden med henblik på, at udøve en rettighed efter persondataforordningen. Eksempelvis kan den registrerede bede virksomheden redegøre for hvilke data, som virksomheden ligger inde med vedrørende personen. </template>
                        <template slot="content">
                        </template>
                    </archive> -->
            <list :settings="settings" :data="data" :filter="filter">
                <!-- <template slot="list-header">
                                                <th v-for="(item,index) in filter" :class='getClass' v-if="item.checked">{{item.text}}</th>
                                            </template>
                                            <template slot="list-content">
                                                <list-item v-for="(item,index) in group" :data="item" :key="index"></list-item>
                                            </template> -->
            </list>
        </template>
    </page>
</template>

<script>
import list from '@/components/archive/list/list'
// import listitem from '@/components/archive/list/ListItem'
// import { filter } from './henvendelse.js'
// import mixin from '@/components/archive/archiveMixin.js'
export default {
    // mixins: [mixin],
    components: {
        "list": list
    },
    data() {
        return {
            data: [
                { a: 31, b: 91, c: 3, d: "some date", e: "fgd", f: "today", _id: 2 },
                { a: 1, b: 384, c: 3, d: "some date", e: "vxc", f: "today", _id: 2 },
                { a: 31, b: 832, c: 3, d: "some date", e: "asd", f: "tomorrow", _id: 2 },
                { a: 1, b: 72, c: 3, d: "some date", e: "asghdasd", f: "tomorrow", _id: 2 },
                { a: 51, b: 625, c: 3, d: "some date", e: "asd", f: "tomorrow", _id: 2 },
                { a: 51, b: 52, c: 3, d: "some date", e: "dfg", f: "yesterday", _id: 2 },
                { a: 1, b: 42, c: 3, d: "some date", e: "asdaaasd", f: "yesterday", _id: 2 }
            ],
            filter: {
                a: { title: "kata", checked: false },
                b: { title: "katb", checked: true },
                d: { title: "katd", checked: false },
                e: { title: "kate", checked: true },
            },
            settings: {groupedBy:"a"}
        }
    },
    computed: {
        // list1: function() {
        //     return { ...this.filter, a: { title: "kataa", checked: false } }
        // },
        // list2: function() {
        //     return {...this.filter, b: { title: "katbb", checked: true } }
        // },
        // list3: function() {
        //     return { ...this.filter,e: { title: "katee", checked: true } }
        // }
    }
}

</script>

<style>

</style>