<template>
    <div class="list">
        <input type="text" v-model="search">
        <div class="list-header list-row">
            <div class="list-col" v-for="(item, index) in filter" v-if="item.checked" :key="index" @click="sortByColumn(index)">
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="list-body">
            <template v-if="settings.groupedBy !== undefined">
                <list-group v-for="(item, index) in grouped" :filter="filter" :search="search" :data="item" :group="index" :settings="settings" :database="database" :key="index"></list-group>
            </template>
            <div v-else>
                <list-item v-for="(item, index) in filtered" :filter="filter" :search="search" :data="item" :settings="settings" :key="index"></list-item>
            </div>
        </div>
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
    props: ["data", "filter", "settings", "database"],
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
    mounted() {
        this.setColWidth();
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
                    if (this.settings.groupedBy === "category")
                        group.id = groupTitle;
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
        },
        length: function() {
            let length = 0;
            for (var key in this.filter) {
                if (this.filter[key].checked)
                    length++;
            }
            console.log("abasd")

            return length;
        },
        avgCol: function() {
            return Math.floor(12 / this.length);
        },
        remainder: function() {
            return 12 - (this.length * this.avgCol)
        }
    },
    watch: {
        length: function() {
            this.$nextTick(() => {
                this.setColWidth();
            })
        }
    },
    methods: {
        applyFilter(array, extra) {
            return array.map((obj) => {
                let filteredObj = {};
                filteredObj._id = obj._id;

                let filter = this.filter;
                if (this.extraFilter !== undefined)
                    filter = { ...this.filter, ...this.extraFilter }

                for (let key in obj) {
                    if (filter.hasOwnProperty(key) && filter[key].checked === true) {
                        filteredObj[key] = {}
                        filteredObj[key]["value"] = obj[key];
                        filteredObj[key]["format"] = filter[key].format;
                        filteredObj[key]["style"] = filter[key].style;
                        filteredObj[key]["class"] = filter[key].class;
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
        },
        setColWidth() {
            $(".list-row").each((index, row) => {
                let cells = $(row).find(".list-col");
                console.log(cells);
                cells.alterClass('col-*', "col-xs-" + this.avgCol);
                cells.first().alterClass('col-*', "col-xs-" + (this.avgCol + this.remainder));
            });
        }
    }

}
</script>


<style lang="scss">
.list {
    position: relative;
    display: block;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
    margin: 15px 0;
    padding: 15px 0 0 0;

    .list-row {
        position: relative;
        display: inline-block;
        width: 100%;
    }
    .list-col {
        padding: 10px;
        text-align: left;
    }
    .list-col:last-child {
        text-align: right;
    }
    .list-col:first-child {
        text-align: left;
    }

    .list-header {
        position: relative;
        background: #fff;
        .list-col {
            letter-spacing: 2px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 7pt;
            display: block;
            float: left;
            margin: 0px 0 15px 0px;
            padding: 0 10px 0 10px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .list-body {
        position: relative;
        width: 100%;
        background: #f9f9f9;
    }
    .list-item {
        background: #f9f9f9;
        &:hover {
            cursor: pointer;
            .list-item-overlay {
                right: 0;
            }
        }
    }
    .list-item:nth-child(2n+1) {
        background: #fff;
    }
    .list-category {}
    .list-category-header {
        background: #f2f2f2;
        float: left;
        padding: 10px 12px;
        p {
            margin: 0;
            color: #2a2a2a;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 11pt;
            letter-spacing: 2px;
        }
        input[type="text"] {
            background: #fff;
        }
    }

    .list-item-overlay {
        position: absolute;
        width: 55px;
        height: 100%;
        right: -100px;
        background: #fff;
        z-index: 100;
        padding: 12px 6px;
        transition: right .3s ease-in-out;
        box-shadow: -4px 2px 12px 0px rgba(0, 0, 0, 0.15);
        i {
            color: #fff;
            cursor: pointer;
            margin: 0 10px;
            display: inline-block;
        }
        img {
            width: 24px;
            height: auto;
            margin: 0 auto;
            display: block;
        }
        .animated {
            -webkit-animation-duration: .3s;
            animation-duration: .3s;
        }
    }
}
</style>