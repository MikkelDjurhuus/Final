

import { bus } from '@/main';
export default {
    data() {
        return {
            editing: false
        }
    },
    created() {
        bus.$on('Submit', () => { this.Submit() });
        if (this.$route.params.id !== undefined) {
            this.Fetch(this.$route.params.id); this.editing = true;
        }
    },
    methods: {
        Submit() {
            let doc = this.GetValues(this.inputs);
            if (this.editing) {
                doc.dateEdited = Date.now();
                Database.Update(this.database, this.$route.params.id, doc).then((result) => {
                    bus.$emit('Close');
                    console.log("Close")
                })
            }
            else {
                doc.dateCreated = Date.now();
                doc.dateEdited = Date.now();
                Database.Insert(this.database, doc).then((result) => {
                    bus.$emit('Close');
                    console.log("Close")
                })
            }
            console.log("Close")
        },
        GetValues(inputs) {
            let obj = {}
            for (let key in inputs) {
                if (inputs.hasOwnProperty(key)) {
                    let value = inputs[key].value;
                    obj[key] = value;
                }
            }
            return obj;
        },
        Fetch(id) {
            Database.FindID(this.database, id).then((result) => {
                for (var key in result) {
                    if (result.hasOwnProperty(key)) {
                        if (this.inputs[key] !== undefined) {
                            this.inputs[key].value = result[key];
                        }
                    }
                }
            })
        }
    }
}
