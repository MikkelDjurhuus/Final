<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <p>
                    <span>
                        <slot name="title"></slot> 
                    </span>
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="col-sm-6">
                <slot name="input"></slot>
            </div>
        </div>
        <div class="row">
            <slot name="new-row"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
