<template>
  <div class="toast">
    <div class="message">
      <slot></slot>
    </div>
    <div class="line" ref="line"></div>
    <div class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
$fontSize: 14px;
$toastMinHeight: 40px;
$toastBgColor: rgba(0, 0, 0, 0.75);
$toastColor: #fff;
.toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: $fontSize;
  min-height: $toastMinHeight;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $toastBgColor;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: $toastColor;
  padding: 0px 16px;
}
.close {
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  flex-shrink: 0;
}
.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
.message {
  padding: 8px 0px;
}
</style>
<script>
export default {
  name: "cz-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    aotoCloseDelay: {
      type: Number,
      default: 1,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: (toast) => {
            toast.close();
          },
        };
      },
    },
  },
  mounted() {
    this.exactAutoClose();

  },
  methods: {
    updateStyles(){

    },
    exactAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.aotoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      this.closeButton.callback();
    },
  },
};
</script>