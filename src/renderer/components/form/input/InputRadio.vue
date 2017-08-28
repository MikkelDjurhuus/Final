<template>
    <component :is="template">
        <template slot="title">{{data.title}}</template>
        <template slot="description">{{data.description?' - '+data.description:''}}</template>
        <template slot="input">
            <div class="radio-wrap">
                <div class="selection">
                    <input type="radio" :id="data.title +'true'" :value="true" v-model="data.value">
                    <label class="radio-button-placeholder" :for="data.title +'true'">Ja</label>
                    </input>
                    <input type="radio" :id="data.title +'false'" :value="false" v-model="data.value">
                    <label class="radio-button-placeholder" :for="data.title +'false'">Nej</label>
                    </input>
                </div>
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