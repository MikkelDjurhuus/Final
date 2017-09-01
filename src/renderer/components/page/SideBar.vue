<template>
    <div class="sidebar">
        <router-link to="/home">
            <img src="/static/svg/logo_black.svg" alt="" class="logo">
        </router-link>
        <div class="nav">
            <ul>
                <li>
                    <router-link to="/kortlægning">Kortlægning</router-link>
                </li>
                <li>
                    <router-link to="/dokumenter">Dokumenter</router-link>
                </li>
                <li>
                    <router-link to="/procedurer">Procedurer</router-link>
                </li>
                <li>
                    <router-link to="/kontroller">Kontroller</router-link>
                </li>
                <li>
                    <router-link to="/hændelser">Hændelses Log</router-link>
                </li>
                <li>
                    <router-link to="/henvendelser">Henvendelser</router-link>
                </li>
            </ul>
        </div>
        <div class="">
            <a @click="" class="notifications">
                <span></span>
                <img src="/static/svg/bell.svg">
            </a>
            <a @click="showSettings = !showSettings" class="settings">
                <img src="/static/svg/cog3.svg">
            </a>
        </div>
        <settings-popup v-if="showSettings" :settings="settings"></settings-popup>
    </div>
</template>

<script>
import { bus } from '@/main';
import Settings from '@/components/popup/Settings'
export default {
    components: {
        "settings-popup": Settings
    },
    data() {
        return {
            settings: {
                generelt: {},
                ansvarlige: {},
                database: {},
                databehandlere: {},
                systemer: {},
                user: {}
            },
            showSettings: false,
            showNotifications: false
        }
    },
    created() {
        bus.$on('settings-close', () => { this.showSettings = false; });
    }
}
</script>

<style lang="scss" >
@import "../../assets/scss/mixins.scss";
.sidebar {
    width: 100%;
    background: #fff;
    text-align: center;
    padding: 25px 0;
    -webkit-box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.04);
    -moz-box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.04);
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.04);

    .logo {
        position: absolute;
        left: 17px;
        width: 26px;
        height: auto;
        top: 20px;
    }

    .nav {
        ul {
            padding: 0;
            margin: 0;
            li {
                list-style: none;
                display: inline-block;
                transition: all .2s linear;
                a {
                    padding: 4px 15px;
                    color: #424242;
                    border-radius: 12px;
                    letter-spacing: 1px;
                    font-size: 8pt;
                    text-transform: uppercase;
                    @include montserrat-500();
                    display: block;
                    transition: all .2s linear;
                    &:hover,
                    &:focus,
                    &:active {
                        text-decoration: none;
                        color: #2a2a2a;
                    }
                }
                .active,
                .router-link-active {
                    transform: scale(1.2)!important;
                }
            }
        }
    }

    .notifications,
    .settings {
        position: absolute;
        top: 23px;
        right: 18px;
        cursor: pointer;
        img {
            height: 26px;
            width: auto;
        }
    }

    .notifications {
        right: 18px;
        span {
            position: absolute;
            right: -10px;
            width: 20px;
            height: 20px;
            background: $pink;
            border-radius: 50%;
            color: #fff;
            @include montserrat-400();
        }
    }

    .settings {
        right: 58px;
    }

    .settings:hover {
        animation-name: rotate;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .notifications:hover {
        animation-name: bell;
        animation-duration: 12s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes bell {
        0% {
            transform: rotate(0);
        }
        1% {
            transform: rotate(30deg);
        }
        3% {
            transform: rotate(-28deg);
        }
        5% {
            transform: rotate(34deg);
        }
        7% {
            transform: rotate(-32deg);
        }
        9% {
            transform: rotate(30deg);
        }
        11% {
            transform: rotate(-28deg);
        }
        13% {
            transform: rotate(26deg);
        }
        15% {
            transform: rotate(-24deg);
        }
        17% {
            transform: rotate(22deg);
        }
        19% {
            transform: rotate(-20deg);
        }
        21% {
            transform: rotate(18deg);
        }
        23% {
            transform: rotate(-16deg);
        }
        25% {
            transform: rotate(14deg);
        }
        27% {
            transform: rotate(-12deg);
        }
        29% {
            transform: rotate(10deg);
        }
        31% {
            transform: rotate(-8deg);
        }
        33% {
            transform: rotate(6deg);
        }
        35% {
            transform: rotate(-4deg);
        }
        37% {
            transform: rotate(2deg);
        }
        39% {
            transform: rotate(-1deg);
        }
        41% {
            transform: rotate(1deg);
        }
        43% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(0);
        }
    }
}
</style>

