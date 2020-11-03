<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.layout{
    display: flex;
    flex-direction: column;
    flex: 1;
    &.layout-has-sider{
        flex-direction: row;
    }
}
</style>
<script>
export default {
    name:'cz-layout',
    data:()=>{
        return {
            layoutClass:[],
        }
    },
    mounted(){
        this.$children.forEach(child=>{
            if(child.$options._componentTag ==='cz-sider'){
                this.layoutClass.push('layout-has-sider')
            }
        })
    }
}
</script>