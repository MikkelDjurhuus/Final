<template>
    <div class="popup" @click.self="Close">
        <div class="popup-content">
            <a @click="Close">
                <img class="close-button" src="static/svg/close_button.svg">
            </a>
            <br>
            <h3>Filters</h3>
            <div class="filters" v-for="(item,index) in filter">
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
            }
        },
        created() {
        },
        methods: {
            Close() {
                this.$emit("CloseFilter");
            }
        }
    }

</script>

<style lang="scss" scoped>
    .popup {
        backdrop-filter: blur(2px);
        z-index: 1000 !important;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        top: 0px;
        left: 0;
        position: fixed;
    }

    .popup-content {
        background-color: white;
        padding: 25px;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .close-button{
        float: right;
    }
    h3{
        margin-top: 0;
    }
    .filters{
        text-align: left;
    }
</style>