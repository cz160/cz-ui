<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.row{
    display: flex;
}
</style>
<script>
export default {
    name:'cz-row',
    props:{
        span: [Number,String],
    }
}
</script>