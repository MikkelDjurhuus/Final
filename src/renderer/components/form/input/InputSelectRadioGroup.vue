<template>
    <component :is="template">
        <template slot="title">{{data.title}}</template>
        <template slot="description">{{data.description?' - '+data.description:''}}</template>
        <template slot="input">
            <select class="numeric_dropdown" v-model="data.value[0]">
                <option v-for="(item,index) in data.options" :value="item">{{item}}</option>
            </select>
            <div class="radio-wrap">
                <div class="interval-selection">
                    <template v-for="(item,index) in data.radio">
                        <input type="radio" :id="item.val" :value="item.val" v-model="data.value[1]">
                        <label class="radio-button-placeholder" :for="item.val">{{item.text}}</label>
                        </input>
                    </template>
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