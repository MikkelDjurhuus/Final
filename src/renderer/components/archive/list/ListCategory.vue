<template>
    <div class="list-category">
        <div class="category-title">
            <input v-if="editing" v-focus type="text" v-model="category.title" v-on:keyup.13='UpdateCategory'>
            <p v-else v-on:click="editing=true">{{category.title}}</p>
        </div>
        <div class="category-items">
            <slot name="list-item">
                <list-item v-for="(item, index) in data":data="item" :key="index" :database="database" :filter="filter">
                </list-item>
            </slot>
        </div>
    </div>
</template>

<script>
import ListItem from './ListItem';

export default {
    components: {
        "list-item": ListItem
    },
    props: ['category', 'data', 'filter', "database"],
    data() {
        return {
            editing: false
        }
    },
    methods: {
        UpdateCategory(e) {
            Database.Update(this.database.category, this.category._id, this.category).then(result => {
                this.editing = false;
            });
        }
    }
}

</script>

<style lang="scss" scoped>

</style>
