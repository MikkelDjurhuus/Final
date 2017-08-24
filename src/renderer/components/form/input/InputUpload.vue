<template>
    <component :is="template">
        <template slot="title">{{data.title}}</template>
        <template slot="input">
            <li v-for="item in data.value">{{item}}
                <i class="fa fa-times" @click="Remove(item)" aria-hidden="true"></i>
            </li>
            <input type="file" id="fileupload">
            <button id="upload" type="button" @click="Upload()">Upload</button>
        </template>
    </component>
</template>

<script>
export default {
    props: ["data", "template"],
    methods: {
        Upload() {
            if ($('#fileupload')[0].files.length > 0) {
                var file = $('#fileupload')[0].files[0];
                var oldPath = file.path;
                var dir = data_path + "/dokumenter";
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }
                var newPath = dir + "/" + file.name;
                this.Copy(oldPath, newPath);
            }
        },
        Copy(oldPath, newPath) {
            var doc = fs.readFileSync(oldPath);
            fs.writeFileSync(newPath, doc);
            var i = newPath.lastIndexOf("/");
            var fileName = newPath.substr(i + 1, newPath.length)
            this.data.value.push(fileName);
            $('#fileupload').val("");
        },
        Remove(item) {
            this.data.value.splice(this.data.value.indexOf(item), 1);
        },
    }
}
</script>

<style>

</style>