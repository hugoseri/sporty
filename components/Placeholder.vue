<template>
  <div class="ui-placeholder" :style="styles">
    <div v-if="icon !== ''" class="ui-placeholder-icon">
      <ui-icon :name="icon"/>
    </div>
    <div v-if="!!$slots.default" class="ui-placeholder-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: { type: String, default: '' },
      height: { type: [String, Number], default: 256 },
    },
    computed: {
      styles() {
        return {
          'min-height': this.height + 'px',
        }
      },
    }
  }
</script>

<style>
  .ui-placeholder {
    position: relative; border-radius: 6px;
    background-color: #DDD; color: #C6C6C6;
  }

  * + .ui-placeholder { margin-top: 20px; }

  .ui-placeholder-icon {
    position: absolute; top: 50%; left: 50%;
    width: 64px; height: 64px; line-height: 64px;
    margin-top: -32px; margin-left: -32px;
    font-size: 64px;
  }

  .ui-placeholder-content { color: #000; }
</style>
