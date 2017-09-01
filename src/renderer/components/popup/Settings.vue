<template>
    <popup>
        <template slot="body">
            <div class="settings-overlay animated fadeInRight">
                <component :is="page" :settings="settings"></component>
            </div>
        </template>
    </popup>
</template>

<script>
import { bus } from '@/main';
import Main from '@/components/settings/Main'
import Generelt from '@/components/settings/Generelt'
import Database from '@/components/settings/Database'
import Databehandlere from '@/components/settings/Databehandlere'
import Systemer from '@/components/settings/Systemer'
import Ansvarlige from '@/components/settings/Ansvarlige'
import Popup from './Popup'
export default {
    props: ["settings"],
    components: {
        "popup": Popup,
        "page-generelt": Generelt,
        "page-database": Database,
        "page-databehandlere": Databehandlere,
        "page-systemer": Systemer,
        "page-ansvarlige": Ansvarlige,
        "page-main": Main
    },
    data() {
        return {
            page: "page-main"
        }
    },
    created() {
        bus.$on('SettingsGoto', (page) => { this.page = "page-"+page });
    }
}
</script>

<style lang="scss">
.settings-overlay {}
</style>