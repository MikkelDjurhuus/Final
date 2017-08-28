<template>
    <component :is="template">
        <template slot="title">{{data.title}}</template>
        <template slot="description">{{data.description?' - '+data.description:''}}</template>
        <template slot="input">
            <input type="date" v-model="data.value" :name="data.title">
        </template>
    </component>
</template>

<script>
export default {
    props: ["data", "template"],
}
</script>

<style>

</style>