import list from './list/List'
import ListCategory from './list/ListCategory'
import { bus } from '@/main';
export default {
    components: {
        "list": list,
        "list-category": ListCategory
    },
    created() {
        bus.$on('New', () => { this.New() });
        bus.$on('Edit', id => { this.Edit(id) });
        this.LoadData(this.database.category);
        this.LoadData(this.database.documents);
    },
    computed: {
        getClass: function () {
            return "col-xs-" + Math.ceil(12 / (Object.keys(this.filter).length - 1));
        },
        listData: function () {
            let data = this[this.database.documents];

            if (this.settings.extraFilter !== undefined) {
                data = this.grouped(data, this.settings.grouped);
                data = this.filtered(data);
            }
            else {
                data = this.filtered(data);
                data = this.grouped(data, this.settings.grouped);
            }

            return data;
        },
    },
    methods: {
        New() {
            this.$router.push({ name: this.database.documents + "-new" });
        },
        Edit(id) {
            this.$router.push({ name: this.database.documents + "-edit", params: { id: id } });
        },
        LoadData(type) {
            Database.FindAll(type).then((result) => {
                this[type] = result;
            })
        },
        grouped(array, prop) {
            return _.groupBy(array, (obj) => {
                return obj[prop];
            })
        },
        filtered(data) {
            if (this.settings.extraFilter !== undefined) {
                for (var key in data) {
                    data[key] = this.applyFilter(data[key], key);
                }
            }
            else {
                data = this.applyFilter(data);
            }
            return data;
        },
        applyFilter(array, extra) {
            return array.map((object) => {
                let obj = {}
                obj._id = object._id;

                let filter = this.filter;
                if (extra != undefined)
                    filter = { ...this.filter, ...this.filter.extra[extra] }

                console.log(filter);
                for (var key in object) {
                    if (filter.hasOwnProperty(key)) {
                        if (filter[key].checked) {
                            obj[key] = {}
                            obj[key]["value"] = object[key];
                            obj[key]["format"] = filter[key].format;
                        }
                    }
                }
                return obj;
            })
        }
    }
}
