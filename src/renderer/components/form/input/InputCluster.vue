<template>
    <component :is="template">
        <template slot="title">{{data.title}}</template>
        <template slot="description">{{data.description?' - '+data.description:''}}</template>
        <template slot="input">
            <div class="inputCluster">
                <input type="text" v-for="(value,key) in data.value" v-model="data.value[key]" :placeholder="key">
            </div>
        </template>
    </component>
</template>

<script>
export default {
    props: ["data", "template"]
}
</script>

<style>

</style>