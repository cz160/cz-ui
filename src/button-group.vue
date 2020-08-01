<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'cz-button-group',
    mounted(){
        for(let node of this.$el.children){
            const name = node.nodeName.toLowerCase();
            if(name !== 'button'){
                console.warn(`cz-button-group组件的子元素应全为cz-button,但是你的子元素存在${name}`)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.button-group{
    display: inline-flex;
    vertical-align: middle;
    >.cz-button{
        border-radius: 0;
        &:not(:first-child){
            margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>