<template>
    <tbody>
        <tr class="group">
            <td :colspan="Object.keys(this.data.documents[0]).length">
                <input v-if="editing" v-focus type="text" v-model="data.title" v-on:keyup.13='UpdateCategory'>
                <p v-else v-on:click="editing=true">{{data.title}}</p>
            </td>
        </tr>
        <list-item v-for="(item, index) in data.documents" :search="search" :data="item" :settings="settings" :key="index"></list-item>
    </tbody>
</template>

<script>
import item from './item'
export default {
    components: {
        "list-item": item
    },
    props: ["data", "settings", "search"],
    data() {
        return {
            editing: false
        }
    },
    methods: {
        UpdateCategory(e) {
            // Database.Update(this.database.category, this.category._id, this.category).then(result => {
            //     this.editing = false;
            // });
            this.editing = false;
        }
    }
}
</script>

<style>

</style>
