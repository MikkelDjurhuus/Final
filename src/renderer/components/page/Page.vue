<template>
    <div class="page">
        <div class="page-header">
            <slot name="header">
                <side-bar></side-bar>
            </slot>
        </div>
        <div class="page-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
export default {
    name: "page",
    components: {
        "side-bar": SideBar
    }
}
</script>

<style lang="scss">
.page-header{
    all: initial;
}
</style>
