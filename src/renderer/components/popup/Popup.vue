<template>
    <div class="popup">
        <slot name="body">

        </slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.popup {
    background: rgba(255, 255, 255, 0.86);
    backdrop-filter: blur(8px);
    position: absolute;
    padding: 80px 30px 20px 30px;
    border-radius: 8px;
    text-align: center;
    z-index: 9999;
    display: block;
    float: right;
    top: 82px;
    right: 10px;

    input {
        width: 280px;
        margin: 10px auto;
        width: 280px;
    }

    .popup-button {
        color: #000;
        font-size: 8pt;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        letter-spacing: 2px;
        margin: 20px auto 40px auto;
        display: inline-block;
        text-transform: uppercase;
        padding: 8px 15px;
        background: #fff;
        border-radius: 25px;
        -webkit-box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.04);
        -moz-box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.04);
        box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.04);
    }
    .popup-close {
        position: absolute;
        top: 14px;
        right: 14px;
        cursor: pointer;
        transition: all .2s linear;
        img {
            width: 31px;
            height: 31px;
        }
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin: 0px auto 20px auto;
        width: 280px;
        font-size: 10pt;
        text-align: center;
    }
    ul {
        width: 280px;
        padding: 0;
        margin: 0 auto;
    }
    li {
        list-style: none;
        display: block;
        a {
            color: #2a2a2a;
            letter-spacing: 1px;
            font-size: 8pt;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            margin: 15px 0;
            display: block;
        }
    }
}
</style>
