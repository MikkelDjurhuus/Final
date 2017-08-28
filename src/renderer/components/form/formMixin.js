

import { bus } from '@/main';
export default {
    beforeRouteLeave(to, from, next) {
        // called when the route that renders this component is about to
        // be navigated away from.
        // has access to `this` component instance.
        next();
    },
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
        this.onCreated();
    },
    methods: {
        onCreated() {

        },
        checkCategory(doc) {
            return new Promise(resolve => {
                if (doc.category === undefined || doc.category === "") {
                    Database.FindOne(this.database.category, { id: 1 }).then((result) => {
                        if (result === null) {
                            Database.Insert(this.database.category, { title: "Generelt", id: 1 }).then((result) => {
                                doc.category = result._id;
                                resolve();
                            })
                        } else {
                            doc.category = result._id;
                            resolve();
                        }
                    })
                }
                else {
                    resolve();
                }
            })
        },
        Submit() {

            let doc = this.GetValues(this.inputs);
            this.checkCategory(doc).then(() => {
                doc = this.PreSubmit(doc);
                if (this.editing) {
                    doc.dateEdited = Date.now();
                    Database.Update(this.database.documents, this.$route.params.id, doc).then((result) => {
                        bus.$emit('Close');
                    })
                }
                else {
                    doc.dateCreated = Date.now();
                    doc.dateEdited = Date.now();
                    Database.Insert(this.database.documents, doc).then((result) => {
                        bus.$emit('Close');
                    })
                }
            });
        },
        PreSubmit(doc) {
            return doc;
        },
        GetValues(inputs) {
            let obj = {}
            if (inputs.length !== undefined) {
                for (var i = 0; i < inputs.length; i++) {
                    var element = inputs[i];
                    for (let key in element) {
                        if (element.hasOwnProperty(key)) {
                            let value = element[key].value;
                            obj[key] = value;
                        }
                    }
                }
            }
            else {
                for (let key in inputs) {
                    if (inputs.hasOwnProperty(key)) {
                        let value = inputs[key].value;
                        obj[key] = value;
                    }
                }
            }
            return obj;
        },
        Fetch(id) {
            Database.FindID(this.database.documents, id).then((result) => {
                let inputs = {};
                this.inputs.forEach(function(element) {
                    inputs = {...inputs, ...element};
                }, this);
                for (var key in result) {
                    if (result.hasOwnProperty(key)) {
                        if (key === "sender")
                            if (inputs[key] !== undefined) {
                            inputs[key].value = result[key];
                        }
                    }
                }
            })
        }
    }
}
