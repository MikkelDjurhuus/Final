<template>
    <div class="form-page">
        <div class="overlay">
            <a @click="Close()" class="close-form">
                <img src="/static/svg/close_button.svg">
            </a>
            <a @click="Submit()" class="submit-form">
                <img src="/static/svg/finish.svg">
            </a>
            <div class="wrapper">
                <div class="form-page-header">
                    <h3 class="title">
                        <slot name="title"></slot>
                    </h3>
                </div>
                <div class="form-page-content">
                    <div class="container">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from '@/main';
export default {
    props: ["database"],
    created() {
        bus.$on('Close', () => { this.Close() });
    },
    methods: {
        Close() {
            this.$router.go(-1);
        },
        Submit() {
            bus.$emit("Submit");
        }
    }
}
</script>

<style lang="scss">
.overlay {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(7px);
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0;
}

.form-page {
    .form-page-header {
        position: fixed;
        top: 0px;
        left: 0;
        width: 100%;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: wrap;
        z-index: 9997;
        .title {
            color: #000;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            letter-spacing: 2px;
            text-align: center;
            margin: 0;
            font-size: 11pt;
            flex-basis: 100%;
            -webkit-animation-delay: .1s;
            animation-delay: .1s;
        }
    }
    .form-page-content {
        margin-top: 100px;
        overflow-x: hidden;
        overflow-y: scroll;
        width: calc(100% + 20px);
        padding-right: 15px;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        position: relative;
        padding: 10px 15px 50px 15px;
    }
    .wrapper {
        width: 900px;
        margin: 0 auto;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .container {
        width: 100% !important;
    }


    .close-form {
        position: absolute;
        top: 14px;
        right: 14px;
        height: auto;
        z-index: 9998;
        transition: all .2s linear;
        img {
            width: 31px;
        }
    }
    .submit-form {
        position: absolute;
        bottom: 14px;
        right: 14px;
        transition: all .2s linear;
        img {
            width: 51px;
        }
    }


    .row {
        margin-bottom: 20px;
    }

    p {
        color: #2a2a2a;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 12pt;
        font-size: 11.5px;
        letter-spacing: .2px;
    }

    span {
        color: #2a2a2a;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    input[type="text"],
    input[type="email"],
    input[type="file"],
    input[type="date"],
    input[type="button"],
    select,
    textarea {
        width: 90%;
        float: right;
        min-height: 42px;
        background: none;
        border: none;
        padding: 10px 20px;
        border-radius: 12px;
        border: 2px solid #f2f2f2;
        display: block;
        outline: 0;
        font-size: 13px;
        letter-spacing: 1px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        resize: none;
        transition: box-shadow .2s linear;
    }


    button {
        margin-left: 38px;
        padding: 3px;
        border-radius: 8px;
        outline: 0;
        font-size: 9pt;
        background: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        border: 2px solid #f3f3f3;
        margin-top: 10px;
    }
    select {
        height: 40px;
        -webkit-appearance: none;
    }

    input[type="file"] {
        background: none;
        box-shadow: none;
        border: none;
        padding: 0;
        min-height: 0;
        -webkit-font-smoothing: antialiased;
    }

    .radio-wrap .selection,
    .radio-wrap .interval-selection,
    .radio-wrap .procedure-selection {
        text-align: right;
    }

    input[type=radio]:checked+label {
        -webkit-box-shadow: 2px 0px 14px 0px rgba(0, 0, 0, 0.08);
        -moz-box-shadow: 2px 0px 14px 0px rgba(0, 0, 0, 0.08);
        box-shadow: 2px 0px 14px 0px rgba(0, 0, 0, 0.08);
        background: #333;
        color: #fff;
    }

    label {
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 15pt;
        font-size: 12px;
        transition: box-shadow .2s linear;
    }

    label {
        font-weight: normal !important;
    }

    .radio-button-placeholder {
        display: inline-block;
        width: auto;
        padding: 5px 12px;
        border-radius: 25px;
        color: #2a2a2a;
        cursor: pointer;
        text-align: center;
        border: 2px solid #f2f2f2;
        margin-left: 0px;
        position: relative;
    }

    input[type=radio] {
        visibility: hidden;
        transition: box-shadow .2s linear;
    }

    .inline {
        position: absolute;
        display: block;
        margin: 0px 0 0 0;
        cursor: pointer;
    }

    .btn-check {
        top: 17px;
        right: 30px;
        width: 13px;
    }

    .btn-add {
        right: 30px;
        top: 12px;
        width: 18px;
    }
    .btn-remove {
        right: 30px;
        top: 14px;
        width: 13px;
    }
}
</style>

