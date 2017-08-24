<template>
    <div id="archive">
        <list></list>
        <empty>
            <template slot="empty-text">
                <slot name="empty-text">
                </slot>
            </template>
        </empty>
    </div>
</template>

<script>
import Empty from './Empty';
import List from './list/List';
export default {
    name: "archive",
    components: {
        "empty": Empty,
        "list": List
    }
}
</script>

<style>

</style>
