<template >
    <tr v-if="display">
        <td v-for="(item, index) in data" v-if="index !== '_id'" :key="index">
            <p>{{item.value}}</p>
        </td>
    </tr>
</template>

<script>
export default {
    props: ["data", "settings", "search"],
    computed: {
        display: function() {
            if (this.search === "")
                return true;
            for (var key in this.data) {
                let prop = this.data[key].value;
                if (typeof prop === "string") {
                    if (prop.indexOf(this.search) !== -1) {
                        return true;
                    }
                }
            }
            return false;
        }
    },
    created() {
    }
}
</script>

<style>

</style>
