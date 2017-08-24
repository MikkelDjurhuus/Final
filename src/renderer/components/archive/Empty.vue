<template>
    <div id="empty">
        <p id="empty-text" class="animated fadeInDown">
            <slot name="empty-text"> </slot>
        </p>
        <img id="empty-info-graphic" class="animated fadeInDown" src="/static/svg/how_to_2.svg">
        <a id="empty-add-new" class="animated fadeInDown" @click="New()"> OPRET </a>
    </div>
</template>

<script>
import { bus } from '../../main';
export default {
    methods: {
        New() {
            bus.$emit('New');
        }
    }
}
</script>

<style lang="scss" scoped>
#empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    #empty-info-graphic {
        width: 750px;
        height: auto;
        display: block;
        -webkit-animation-delay: .2s;
        animation-delay: .2s;
    }
    p#empty-text {
        max-width: 810px;
        margin: 10px auto; // @include montserrat-400();
        -webkit-animation-delay: .1s;
        animation-delay: .1s;
        font-weight: 400;
    }
    #empty-add-new {
        font-weight: 600;
        margin: 40px 0 0 0;
        cursor: pointer;
        padding: 8px 15px;
        background: #fff;
        border-radius: 25px;
        color: #000;
        font-size: 8pt; // @include montserrat-600();
        letter-spacing: 2px;
        -webkit-box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.04);
        -moz-box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.04);
        box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.04);
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
    }
}
</style>

