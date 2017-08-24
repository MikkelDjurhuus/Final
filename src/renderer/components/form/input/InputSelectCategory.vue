<template>
    <component :is="template">
        <template slot="title">{{data.title}} - </template>
        <template slot="description">{{data.description}}</template>
        <template slot="input">
            <img v-if="!newCategory" class="inline btn-add" src='/static/svg/plus.svg' @click="newCategory = !newCategory">
            <img v-else class="inline btn-remove" src='/static/svg/remove.svg' @click="newCategory = !newCategory">
            <select id="categories" :name="data.title" v-model="data.value">
                <option disabled="" value="">Vælg eller opret en kategori</option>
                <option v-for="(item,index) in data.options" :value="item._id">{{item.titel}}</option>
            </select>
        </template>
        <template slot="new-row" v-if="newCategory">
            <div class="col-sm-6 col-sm-offset-6">
                <img @click="CreateCategory" class="inline btn-check" src="/static/svg/check.svg">
                <input type="text" placeholder="Titel på en ny kategori" v-model="newCategoryText"></input>
            </div>
        </template>
    </component>
</template>

<script>
import Mixin from './mixins/select.js'
export default {
    mixins: [Mixin],
    data() {
        return {
            newCategory: false,
            newCategoryText: "",
        }
    },
    methods: {
        CreateCategory() {
            Database.Insert(this.data.category, { titel: this.newCategoryText }).then((result) => {
                this.data.options.push(result);
                this.data.value = result._id;
                this.newCategory = false;
                this.newCategoryText = "";
            })
        }
    }
}
</script>

<style>

</style>