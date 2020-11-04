<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
$fontSize:14px;
$toastHeight:40px;
$toastBgColor:rgba(0,0,0,0.75);
$toastColor:#fff;
.toast{
    position: fixed;
    top: 10;
    left: 50%;
    transform: translateX(-50);
    font-size: $fontSize;
    height: $toastHeight;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $toastBgColor;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    color: $toastColor;
    padding: 0 16px;
}
</style>
<script>
export default {
    name:'cz-toast',
}
</script>