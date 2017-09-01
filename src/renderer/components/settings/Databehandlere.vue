<template>
    <div class="settings-overlay-databehandlere">
        <a @click="Close()" class="popup-close">
            <img src="static/svg/close_button.svg">
        </a>
        <p>Administrér databehandlere her.</p>

        <h4 v-for="(item, index) in databehandlere">{{item.titel}}
            <img @click="Remove(index)" src="static/svg/trash.svg">
            <img @click="Edit(index)" src="static/svg/edit.svg">
        </h4>

        <input type="text" placeholder=""></input>
        <p>Databehandler aftale</p>
        <select>
            <option disabled="" value="" selected="">Vælg et dokument?</option>
        </select>
        <a @click="Save()" class="popup-button">
            gem
        </a>
    </div>
</template>

<script>
import mixin from './mixins'
export default {
    mixins: [mixin]
}
</script>

<style lang="scss">
.settings-overlay-databehandlere {
    h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
        font-size: 13px;
        margin: 15px auto;
        width: 280px;
        text-align: left;
        border: 1px dashed #f2f2f2;
        border-radius: 12px;
        padding: 15px;
        position: relative;
    }
}
</style>
