<template>
    <tr class="list-item">
        <div class="list-item-overlay animated">
            <slot name="list-item-overlay">
                <div v-on:click="Edit()">
                    <img src="static/svg/edit.svg">
                </div>
            </slot>
        </div>
        <slot name="list-item">
            <td v-for="(item,index) in data" v-if="index!='_id'">
                <p>{{item,index | formatted}}</p>
            </td>
        </slot>
    </tr>
</template>

<script>
import { bus } from '@/main';
export default {
    props: ['data'],
    computed: {
        colLength: function() {
            return Object.keys(this.data).length - 1;
        },
        avgColWidth: function() {
            return Math.floor(12 / this.colLength);
        },
        colRemainder: function() {
            return 12 % this.avgWidth === 0;
        },
    },
    filters: {
        formatted: (item, index) => {
            console.log(item)
            switch (item.format) {
                case "date":
                    let date = moment(item.value).format("YYYY MM DD");
                    return date !== "Invalid date" ? date : "Ikke sat"
                    break;

                default:
                    if (item.format !== undefined)
                        return item.value[item.format]
                    else return item.value;
            }
        }
    },
    created() {
    },
    methods: {
        colWidth(index) {
            // console.log(index)
            // if (index === 0) {
            //     return "col-xs-" + this.avgColWidth + 1;
            // }
            // return "col-xs-" + this.avgColWidth;
        },
        Edit() {
            bus.$emit("Edit", this.data._id)
        }
    }
}

</script>

<style lang="scss" scoped>

</style>