<template>
    <component :is="template">
        <template slot="title">{{data.title}}</template>
        <template slot="description">{{data.description?' - '+data.description:''}}</template>
        <template slot="input">
            <textarea rows="3" v-model="data.value" :placeholder="data.placeholder"></textarea>
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