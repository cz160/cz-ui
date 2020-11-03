<template>
    <transition name="slide">
        <div class="sider" v-if="visiable">
            <slot></slot>
        <button class="close" @click="hide">close</button>
    </div>
    </transition>
</template>
<style scoped lang="scss">
.sider{
    position: relative;
    > .close{
        position: absolute;
        top: 0;
        right: 0;
    }
}
.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to {
  margin-left: -150px;
}
</style>
<script>
export default {
    name:'cz-sider',
    data:()=>{
        return {
            visiable:true,
        }
    },
    methods:{
        hide(){
            this.visiable = false;
        },
    }
}
</script>