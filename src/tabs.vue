<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.tabs{
    display: flex;
    flex-direction: row;
}
</style>
<script>
export default {
    name:'tabs',
    mounted(){
        console.log(this.$children)
    }
}
</script>