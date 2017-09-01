import list from './list/List'
import { bus } from '@/main';
export default {
    components: {
        "list": list
    },
    computed: {
        data: function () {
            if (this[this.database.documents] !== undefined)
                return this[this.database.documents];
            return [];
        }
    },
    created() {
        bus.$on('New', () => { this.New() });
        bus.$on('Edit', id => { this.Edit(id) });
        this.LoadData(this.database.category);
        this.LoadData(this.database.documents);
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
        }
    }
}
