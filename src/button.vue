<template>
    <button class="cz-button">
        按钮
    </button>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.cz-button{
    font:inherit;
    padding: 0 1em;
    height: var(--button-height);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover{
        border-color: var(--border-hover-color);
    }
    &:active{
        background: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
}
</style>