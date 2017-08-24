<template>
    <component :is="template">
        <template slot="title">{{data.title}} - </template>
        <template slot="description">{{data.description}}</template>
        <template slot="input">
            <select class="input-category" v-model="data.value">
                <option disabled="" value="">{{data.placeholder}}</option>
                <option v-for="(item,index) in data.options" :value="item._id">{{item.titel}}</option>
            </select>
        </template>
    </component>
</template>

<script>
import Mixin from './mixins/select.js'
export default {
    mixins: [Mixin]
}
</script>

<style>

</style>