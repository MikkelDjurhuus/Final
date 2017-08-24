<template>
    <component :is="template">
        <template slot="title">{{data.title}} - </template>
        <template slot="description">{{data.description}}</template>
        <template slot="input">
            <input type="text" v-model="data.value" :placeholder="data.placeholder">
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