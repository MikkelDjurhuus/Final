<template>
    <div class="list-item">
        <div class="list-item-overlay animated">
            <slot name="list-item-overlay">
                <div v-on:click="Edit()">
                    <img src="static/svg/edit.svg">
                </div>
            </slot>
        </div>
        <slot name="list-item">
            <p v-for="(item,index) in data" :class="c" v-if="index!='_id'">{{item,index,data | formatted}}</p>
        </slot>
    </div>
</template>

<script>
    import { bus } from '@/main';
    export default {
        props: ['data', 'settings'],
        computed: {
            c: function () {
                return "col-xs-" + Math.ceil(12 / (Object.keys(this.data).length -1));
            }
        },
        filters: {
            formatted: (item, index, data) => {
                switch (item.format) {
                    case "date":
                        let date = moment(item.value).format("YYYY MM DD");
                        return date !== "Invalid date" ? date : "Ikke sat"
                        break;

                    default:
                        return item.value;
                }
            }
        },
        created() {
        },
        methods: {
            Edit() {
                console.log(this.data)
                bus.$emit("Edit", this.data._id)
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>