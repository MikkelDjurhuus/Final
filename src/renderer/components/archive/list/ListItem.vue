<template>
    <div id="list_item">
        <div id="list_item_overlay animated">
            <slot name="list_item_overlay">
                <div v-on:click="Edit()">
                    <img src="static/svg/edit.svg">
                </div>
            </slot>
        </div>
        <slot name="list_item">
            <p v-for="(item,index) in filter" :class="c" v-if="item.checked">{{item,index,data | formatted}}</p>
        </slot>
    </div>
</template>

<script>
export default {
    props: ['data', 'filter'],
    computed: {
        c: function () {
            var count = 0;
            Object.keys(this.filter).forEach((key, index) => {
                if (this.filter[key].checked) count++;
            });
            return "col-xs-" + Math.ceil(12 / count);
        }
    },
    filters: {
        formatted: (item, index, data) => {
            switch (item.format) {
                case "date":
                    return moment(data[index]).format("YYYY MM DD");
                    break;

                default:
                    return data[index];
            }
        }
    },
    created() {
    },
    methods: {
        Edit() {
            this.$router.push('/dokumenter/edit/' + this.data._id);
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
