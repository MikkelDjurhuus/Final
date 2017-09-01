<template>
    <div class="list-category">
        <div class="list-category-header list-row">
            <input v-if="editing && category !== undefined" v-focus type="text" v-model="category.title" v-on:keyup.13='UpdateCategory'>
            <p v-else-if="category !== undefined" v-on:click="editing=true">{{category.title}}</p>
            <p v-else>{{title}}</p>
        </div>
        <list-item v-for="(item, index) in data.documents" :filter="filter" :search="search" :data="item" :settings="settings" :key="index"></list-item>
    </div>
</template>

<script>
import item from './item'
export default {
    components: {
        "list-item": item
    },
    props: ["data", "settings", "search", "filter", "database"],
    data() {
        return {
            editing: false,
            category: {}
        }
    },
    created() {
        this.LoadCategory()
    },
    methods: {
        UpdateCategory(e) {
            if (this.data.id !== undefined) {
                Database.Update(this.database.category, this.data.id, this.category).then(result => {
                    this.editing = false;
                });
            }
            this.editing = false;
        },
        LoadCategory() {
            Database.FindID(this.database.category, this.data.id).then(result => {
                this.category = result;
            })
        }
    }
}
</script>

<style>

</style>
