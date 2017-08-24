<template>
    <div class="slider">
        <div class="slider-content" ref="slider-content">
            <slot name="slider-content"></slot>
        </div>
        <div class="slider-nav" v-if="slides.length > 1">
            <slot name="slider-nav">
                <button type="button" id="prev" @click="prev()">
                    <img src="/static/svg/arrow_left_button.svg">
                </button>
                <button type="button" id="next" @click="next()">
                    <img src="/static/svg/arrow_right_button.svg">
                </button>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            prevSlide: 0,
            currentSlide: 0,
            slides: []
        }
    },
    mounted() {
        this.initSlider();
    },
    methods: {
        initSlider() {
            this.slides = $(".slider-content").children().hide();
            for (var i = 0; i < this.slides.length; i++) {
                this.slides[i].id = 'slide' + i;
                if (i === 0) {
                    $(".slider-content").find("#slide" + i).show();
                }
            }
            window.currentSlide = 0;
            window.slides = this.slides.length;
        },
        prev() {
            if (this.currentSlide > 0) {
                this.prevSlide = this.currentSlide;
                this.currentSlide = window.currentSlide -= 1;
                $(".slider-content").find("#slide" + this.prevSlide).hide();
                $(".slider-content").find("#slide" + this.currentSlide).show();
            }
        },
        next() {
            if (this.currentSlide < this.slides.length - 1) {
                this.prevSlide = this.currentSlide;
                this.currentSlide = window.currentSlide += 1;
                $(".slider-content").find("#slide" + this.prevSlide).hide();
                $(".slider-content").find("#slide" + this.currentSlide).show();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.slider-nav {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 200px;
    button {
        background: none;
        border: none;
        outline: 0;
        display: inline-block;
        transition: all .2s linear;
        &:hover {
            transform: scale(1.2);
        }
        img {
            width: 31px;
            height: auto;
        }
    }
}
</style>
