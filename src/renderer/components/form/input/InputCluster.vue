<template>
    <component :is="template">
        <template slot="title">{{data.title}} - </template>
        <template slot="description">{{data.description}}</template>
        <template slot="input">
            <div class="inputCluster">
                <input v-for="(item,index) in data.cluster" v-model="item.value" :placeholder="item.placeholder">
            </div>
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