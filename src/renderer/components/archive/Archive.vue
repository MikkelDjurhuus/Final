<template>
    <div id="archive">
        <empty v-if="data.length < 1">
            <template slot="empty-text">
                <slot name="empty-text">
                </slot>
            </template>
        </empty>
        <div v-else class="container">
            <list-filter v-if="editFilter" :filter="settings.filter" v-on:CloseFilter="editFilter = false"></list-filter>
            <div class="icons col-md-12">
                <a class="add-archive-item" @click="New">
                            <img src="static/svg/plus_button.svg" alt="">
                        </a>
                <a class="filter-icon" @click="editFilter = !editFilter">
                        <img src="static/svg/settings.svg" alt="">
                    </a>
            </div>
            <list :categories="listData" :database="database" :settings="settings"></list>
        </div>
    </div>
</template>

<script>
    import { bus } from '../../main';
    import Empty from './Empty';
    import ListFilter from './list/ListFilter';
    import List from './list/List';
    export default {
        name: "archive",
        components: {
            "empty": Empty,
            "list": List,
            "list-filter": ListFilter
        },
        props: ['data', 'settings', 'categories', 'database'],
        data() {
            return {
                editFilter: false
            }
        },
        created() {
        },
        methods: {
            New() {
                bus.$emit('New');
            },
            Category(id) {
                return this.categories.filter((category) => {
                    return category._id === id;
                })[0]

            },
            Group(array, prop) {
                return _.groupBy(array, object => object[prop])
            },
            Filter(groupedData) {
                let filtered = [];
                for (var key in groupedData) {
                    if (groupedData.hasOwnProperty(key)) {
                        let category = this.Category(key);
                        if (category === undefined) {
                            category = { title: "undefined" }
                        }
                        category.documents = this.Map(groupedData[key], this.settings.filter);
                        filtered.push(category);
                    }
                }
                return filtered
            },
            Map(array, filter) {
                return array.map((obj) => {
                    let filteredObject = {};
                    filteredObject._id = obj._id;
                    for (var key in filter) {
                        if (filter.hasOwnProperty(key)) {
                            if (filter[key].checked) {
                                filteredObject[key] = {}
                                filteredObject[key].value = obj[key];
                                filteredObject[key].format = filter[key].format;
                            }
                        }
                    }
                    return filteredObject;
                })
            }
        },
        computed: {
            listData: function () {

                let data = [];
                if (this.data !== undefined && this.data.length > 0) {

                    data = this.Group(this.data, 'category');

                    if (this.settings.filter !== undefined) {
                        data = this.Filter(data);
                    }
                }
                return data;
            },
        }
    }

</script>

<style lang="scss">
    .icons {
        a {
            margin: 10px 0px 0px 30px;
            float: right;
            cursor: pointer;
            z-index: 10;
            transition: all .2s linear;
            img {
                width: 31px;
            }
        }
    }
</style>