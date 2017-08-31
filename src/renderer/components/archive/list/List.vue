<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th colspan="10">
                        <input type="text" v-model="search" style="width:100%">
                    </th>
                </tr>
                <tr>
                    <th v-for="(item, index) in filter" v-if="item.checked" :key="index" @click="sortByColumn(index)">
                        <p>{{item.title}}</p>
                    </th>
                </tr>
            </thead>
            <template v-if="settings.groupedBy !== undefined">
                <list-group v-for="(item, index) in grouped" :search="search" :data="item" :group="index" :settings="settings" :key="index"></list-group>
            </template>
            <tbody v-else>
                <list-item v-for="(item, index) in filtered" :search="search" :data="item" :settings="settings" :key="index"></list-item>
            </tbody>
        </table>
    </div>
</template>

<script>
import item from './item'
import group from './group'
export default {
    components: {
        "list-item": item,
        "list-group": group
    },
    props: ["data", "filter", "settings"],
    data() {
        return {
            sortBy: "",
            sortAsc: true,
            search: ""
        }
    },
    created() {
        for (var key in this.filter) {
            if (this.filter[key].checked) {
                this.sortBy = key;
                return;
            }
        }
    },
    computed: {
        grouped: function() {
            if (this.settings.groupedBy !== undefined) {
                let grouped = _.groupBy(this.data, (obj) => {
                    return obj[this.settings.groupedBy];
                })

                let groupedAndFiltered = [];
                for (var groupTitle in grouped) {
                    let group = { title: groupTitle };
                    let filtered = this.applyFilter(grouped[groupTitle]);
                    group.documents = this.sortList(filtered);
                    groupedAndFiltered.push(group);
                }
                return groupedAndFiltered;
            }
            return this.data;
        },
        filtered: function() {
            if (this.filter !== undefined) {
                let filtered = this.applyFilter(this.data);
                return this.sortList(filtered);
            }
            return this.data;
        }
    },
    methods: {
        applyFilter(array, extra) {
            return array.map((obj) => {
                let filteredObj = {};
                filteredObj._id = obj._id;

                let filter = this.filter;
                if (this.extraFilter != undefined)
                    filter = { ...this.filter, ...this.extraFilter }
                for (let key in obj) {
                    if (filter.hasOwnProperty(key) && filter[key].checked === true) {
                        filteredObj[key] = {}
                        filteredObj[key]["value"] = obj[key];
                        filteredObj[key]["format"] = filter[key].format;
                        filteredObj[key]["style"] = filter[key].style;
                    }
                }
                return filteredObj;
            })
        },
        sortByColumn(index) {
            if (index === this.sortBy) {
                this.sortAsc = !this.sortAsc;
            }
            else {
                this.sortBy = index;
            }
        },
        sortList(list) {
            if (this.sortAsc) {
                return _.sortBy(list, (obj) => {
                    return obj[this.sortBy].value;
                })
            }
            return _.sortBy(list, (obj) => {
                return obj[this.sortBy].value;
            }).reverse();
        }
    }

}
</script>


<style lang="scss">
table {
    width: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
    margin: 15px 0;
    td,
    th {
        padding: 10px;
        text-align: left;
    }
    td:last-child,
    th:last-child {
        text-align: right;
    }
    td:first-child,
    th:first-child {
        text-align: left;
    }
    thead {
        tr {
            th {}
        }
    }
    tbody {
        tr {
            background: #f9f9f9;
            td {}
        }
        tr:nth-child(2n+1) {
            background: #fff;
        }
        tr.group {
            background: #f1f1f1;
            td {}
        }
    }
}
</style>