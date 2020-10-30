<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.col{
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;

    $class-prefix: col-;

    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            width: ($n / 24) * 100%;
            background-color: darken(cornflowerblue, 0% + ($n / 2));
        }
    }
}
</style>
<script>
export default {
    name:'cz-col',
    props:{
        span: {
            type: [String,Number]
        },
    }
}
</script>