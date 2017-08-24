<template>
    <div class="popup">
        <div class="popup_inhold">
            <a @click="Close()">
                <img class="close_button" src="static/svg/close_button.svg">
            </a>
            <br>
            <h3>Filters</h3>
            <div class="filters" v-for="(item,index) in temp">
                <input type="checkbox" :id="'checkbox'+index" v-model="item.checked">
                <label :for="'checkbox'+index">{{ item.text }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: ['filter'],
    data() {
        return {
            temp: {}
        }
    },
    created() {
        var json = JSON.stringify(this.filter);
        console.log(json)
        this.temp = JSON.parse(json);
        console.log(this.temp)
    },
    methods: {
        Close() {
            this.$emit("UpdateFilter", this.temp);
        }
    }
}
</script>

<style lang="scss">
</style>
