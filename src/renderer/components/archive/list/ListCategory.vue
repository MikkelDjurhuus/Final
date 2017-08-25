<template>
    <section>
        <div class="category-title">
            <input v-if="editing" type="text" v-model="category.title" v-on:keyup.13='UpdateCategory'>
            <p v-else v-on:click="editing=true">{{category.title}}</p>
        </div>
        <slot name="list-item">
            <list-item v-for="(item, index) in category.documents" :key="index" :database="database" :settings="settings" :data="item">
            </list-item>
        </slot>
    </section>
</template>

<script>
import ListItem from './ListItem';

export default {
    components: {
        "list-item":ListItem
    },
    props: ['category',"database",'settings'],
    data() {
        return {
            editing: false
        }
    },
    created() {
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
