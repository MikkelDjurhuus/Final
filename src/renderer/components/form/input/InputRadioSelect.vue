<template>
    <component :is="template">
        <template slot="title">{{data.title}}</template>
        <template slot="description">{{data.description?' - '+data.description:''}}</template>
        <template slot="input">
            <div class="radio-wrap">
                <div class="selection">
                    <input type="radio" :id="data.title +'true'" :value="true" v-model="showSelect">
                    <label class="radio-button-placeholder" :for="data.title +'true'">Ja</label>
                    </input>
                    <input type="radio" :id="data.title +'false'" :value="false" v-model="showSelect">
                    <label class="radio-button-placeholder" :for="data.title +'false'">Nej</label>
                    </input>
                </div>
            </div>
            <select class="input-select" v-model="data.value" v-if="showSelect">
                <option disabled="" value="">{{data.placeholder}}</option>
                <option v-for="(item,index) in data.options" :value="item._id">{{item.title}}</option>
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