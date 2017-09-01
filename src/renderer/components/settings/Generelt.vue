<template>
    <div class="settings-overlay-generelt">
        <a @click="Close()" class="popup-close">
            <img src="static/svg/close_button.svg">
        </a>
        <p>Indtast oplysninger om din virksomhed</p>
        <input type="text" placeholder="Virksomhed" v-model="settings.generelt.virksomhed"></input>
        <input type="text" placeholder="CVR" v-model="settings.generelt.cvr"></input>
        <input type="text" placeholder="Adresse" v-model="settings.generelt.adresse"></input>
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
.settings-overlay-generelt {}
</style>
