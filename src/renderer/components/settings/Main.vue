<template>
    <div class="settings-overlay-main animated fadeInRight">
        <a @click="Close()" class="popup-close">
            <img src="static/svg/close_button.svg">
        </a>
        <img class="user-icon" src="static/svg/profile.svg">
        <h2>{{settings.user.userName ? settings.user.userName : "Brugernavn"}}</h2>
        <ul>
            <li>
                <a @click="SettingsGoto('generelt')">Generelt</a>
            </li>
            <li>
                <a @click="SettingsGoto('ansvarlige')">Ansvarlige</a>
            </li>
            <li>
                <a @click="SettingsGoto('systemer')">Systemer</a>
            </li>
            <li>
                <a @click="SettingsGoto('databehandlere')">Databehandlere</a>
            </li>
            <li>
                <a @click="SettingsGoto('database')">Database</a>
            </li>
        </ul>
        <a class="logout popup-button" @click="Logud()">
            Log ud
        </a>
    </div>
</template>

<script>
import { bus } from '@/main';
import mixin from './mixins'
export default {
    mixins: [mixin],
    data() {
        return {

        }
    },
    methods: {
        SettingsGoto(page) {
            bus.$emit('SettingsGoto', page);
        }
    }
}
</script>

<style lang="scss">
.settings-overlay-main {
    .user-icon {
        width: 40px;
        height: auto;
        display: block;
        margin: 0 auto;
    }
    h2 {
        width: 280px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        letter-spacing: 2px;
        font-size: 13pt;
        margin: 10px auto 60px auto;
    }
    .logout {
        margin: 60px auto 40px auto;
    }
}
</style>