<template>
    <section>
        <div id="category_title">
            <input v-if="editing" type="text" v-model="category.titel" v-on:keyup.13='UpdateCategory'>
            <p v-else v-on:click="editing=true">{{category.titel}}</p>
        </div>
        <slot name="list_item">
            <list-item v-for="(item, index) in category.documents" :key="item.id" :database="database" :data="item" :filter="filter">
            </list-item>
        </slot>
    </section>
</template>

<script>
import ListItem from './ListItem';
import db from '../../../main/DatabaseAPI.js'

export default {
    components: {
        "list-item":ListItem
    },
    props: ['category', 'filter', 'database'],
    data() {
        return {
            editing: false
        }
    },
    created() {
    },
    methods: {
        UpdateCategory(e) {
            db.Update(this.database.category, this.category._id, this.category).then(result => {
                this.editing = false;
            });
        }
    }
}

</script>

<style lang="scss" scoped>
</style>
