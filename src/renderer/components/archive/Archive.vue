<template>
    <div class="archive">
        <div class="container">
            <section v-if="data.length < 1">
                <empty>
                    <template slot="empty-text">
                        <slot name="empty-text"></slot>
                    </template>
                </empty>
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
                        <list :settings="settings" :data="data" :filter="filter"> </list>
                    </slot>
                </div>
                <list-filter v-if="editFilter" :filter="filter" v-on:CloseFilter="editFilter = false"></list-filter>
            </section>
        </div>
    </div>
</template>

<script>
import Empty from './Empty'
import List from './list/List'
import ListFilter from './list/ListFilter'
export default {
    props: ["filter", 'data', 'settings'],
    components: {
        "empty": Empty,
        "list-filter": ListFilter,
        "list": List
    },
    data() {
        return {
            editFilter: false
        }
    },

}
</script>

<style lang="scss">
.icons {
    margin-top: -50px;
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
</style>
