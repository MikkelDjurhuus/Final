<template>
    <component :is="template">
        <template slot="title">{{data.title}} - </template>
        <template slot="description">{{data.description}}</template>
        <template slot="input">
            <div class="radio-wrap">
                <div class="selection">
                    <input type="radio" id="true" :value="true" v-model="showSelect">
                    <label class="radio-button-placeholder" for="true">Ja</label>
                    </input>
                    <input type="radio" id="false" :value="false" v-model="showSelect">
                    <label class="radio-button-placeholder" for="false">Nej</label>
                    </input>
                </div>
            </div>
            <select class="input-select" v-model="data.value" v-if="showSelect">
                <option disabled="" value="">{{data.placeholder}}</option>
                <option v-for="(item,index) in data.options" :value="item._id">{{item.titel}}</option>
            </select>
        </template>
    </component>
</template>

<script>
import Mixin from './mixins/select.js'
export default {
    mixins: [Mixin],
    data(){
        return{
            showSelect: false
        }
    }
}
</script>

<style>

</style>