<template>
    <div class="tabpane">
        <div class="tabpane-title">{{ tab }}111</div>
        <div class="tabpane-content">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.tabpane{
    display: flex;
    flex-direction: column;
    & > .tabpane-title{
        width: 100px;
    }
    & > .tabpane-content{
        flex: 1;
    }
}
</style>
<script>
export default {
    name:'cz-tabpane',
    props:['tab','tabKey'],
    mounted(){
        console.log(this.tab,this.tabKey)
    }
}
</script>