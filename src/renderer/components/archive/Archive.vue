<template>
    <div class="archive">
        <div class="container">
            <section v-if="data.length < 1">
                <!-- <empty>
                    <template slot="empty-text">
                        <slot name="empty-text"></slot>
                    </template>
                </empty> -->
            </section>
            <section v-else>
                <div class="icons col-md-12">
                    <a class="add-archive-item" @click="$emit('New')">
                        <img src="static/svg/plus_button.svg" alt="">
                    </a>
                    <a class="filter-icon" @click="editFilter = !editFilter">
                        <img src="static/svg/settings.svg" alt="">
                    </a>
                </div>
                <div class="content">
                    <slot name="content">
                    </slot>
                </div>
                <list-filter v-if="editFilter" :filter="filter" v-on:CloseFilter="editFilter = false"></list-filter>
            </section>
        </div>
    </div>
</template>

<script>
import Empty from './Empty'
import ListFilter from './list/ListFilter'
export default {
    props: ["filter", 'data'],
    components: {
        "empty": Empty,
        "list-filter": ListFilter
    },
    data() {
        return {
            editFilter: false
        }
    },

}
</script>

<style lang="scss">
.archive {
}

.icons {
    padding: 10px;
    a {
        float: right;
        margin-left: 25px;
        cursor: pointer;
        z-index: 10;
        transition: all .2s linear;
        &:hover {
            transform: scale(1.2);
        }
        img {
            width: 31px;
        }
    }
}

.container {
    width: 100%;
}

.content {
    margin-top: 70px;
}

.list {
    background: #fff;
    padding: 15px 0 0 0;
    border-radius: 8px;
    -webkit-box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
    -moz-box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.03);
    display: block;
    float: left;
    margin: 15px 0;
    width: 100%;
    h3 {
        letter-spacing: 2px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 7pt;
        display: block;
        float: left;
        margin: 0px 0 15px 0px;
        padding: 0 10px 0 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}


.category-title {
    position: relative;
    background: #f2f2f2;
    float: left;
    width: 100%;
    display: block;
    padding: 10px 12px;
    p {
        margin: 0;
        color: #2a2a2a;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 11pt;
        letter-spacing: 2px;
    }
    input[type="text"] {
        background: #fff;
    }
}

.list-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    float: left;
    width: 100%;
    padding: 15px 10px;
    overflow: hidden;
    background: #f9f9f9;
    &:nth-child(2n+1) {
        background: #fff;
    }
    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    &:hover {
        cursor: pointer;
        .list-item-overlay {
            right: 0;
        }
    }
    p {
        font-size: 16px;
        letter-spacing: 1px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0;
    }

    .list-item-overlay {
        position: absolute;
        width: 55px;
        top: 0;
        right: -100px;
        background: #fff;
        height: 100%;
        z-index: 9996;
        padding: 12px 6px;
        transition: right .3s ease-in-out;
        -webkit-box-shadow: -4px 2px 12px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: -4px 2px 12px 0px rgba(0, 0, 0, 0.15);
        box-shadow: -4px 2px 12px 0px rgba(0, 0, 0, 0.15);
        i {
            color: #fff;
            cursor: pointer;
            margin: 0 10px;
            display: inline-block;
        }
        img {
            width: 24px;
            height: auto;
            margin: 0 auto;
            display: block;
        }
        .animated {
            -webkit-animation-duration: .3s;
            animation-duration: .3s;
        }
    }
}
</style>
