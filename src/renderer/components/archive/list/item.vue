<template >
    <div v-show="display" class="list-item list-row">
        <div class="list-item-overlay animated">
            <div v-on:click="Edit()">
                <img src="static/svg/edit.svg">
            </div>
        </div>
        <div class="list-col" v-for="(item, index) in filter" v-if="item.checked" :class="data[index].class" :style="data[index].style" :key="index">
            <p>{{data[index] | formatted}}</p>
        </div>
    </div>
</template>

<script>
import { bus } from '@/main';
export default {
    props: ["data", "settings", "search", "filter"],
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
        },
    },
    filters: {
        formatted: (item) => {
            switch (item.format) {
                case "date":
                    let date = moment(item.value).format("YYYY MM DD");
                    return date !== "Invalid date" ? date : "Ikke sat";
                case "interval":
                    return item.value;
                default:
                    if (item.format !== undefined)
                        return item.value[item.format]
                    else if (item.value === undefined || item.value === "") {
                        return "ikke sat";
                    } return item.value;
            }
        }
    },
    methods: {
        Edit() {
            bus.$emit("Edit", this.data._id)
        }
    }
}
</script>

<style>

</style>
