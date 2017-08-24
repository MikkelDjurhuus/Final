<template>
    <page>
        <template slot="content">
            <archive :data="dokumenter" :filter="filter">
                <template slot="empty-text">
                    Dokument-arkivet er alsidigt. Arkivet bør anvendes til alt dokumentation der ikke kan henføres under de andre menu-punkter. Således vil databehandleraftaler, IT-sikkerhedsrapporter eller lign. naturligt kunne uploades her.
                </template>
            </archive>
        </template>
    </page>
</template>

<script>
import { bus } from '../main';
export default {
    data() {
        return {
            dokumenter: [],
            filter: []
        }
    },
    created() {
        bus.$on('New', data => { this.New() });
        this.LoadData("dokumenter");
    },
    methods: {
        New() {
            this.$router.push({ path: "/dokumenter/new" });
        },
        LoadData(type) {
            Database.FindAll(type).then((result) => {
                this[type] = result;
                console.log(result);
            })
        }
    }
}
</script>

<style>

</style>
