export default {
    props: ["data", "template"],
    mounted() {
        if (this.data.options === undefined || this.data.options.length === 0) {
            this.getOptions(this.data.category);
        }
    },
    methods: {
        getOptions(type) {
            Database.FindAll(type).then((result) => {
                this.data.options = result;
                console.log(result);
            })
        }
    }
}