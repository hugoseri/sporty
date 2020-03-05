<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-header-menu-handle" @click="toggleMenu">
        <ui-icon :name="handleIcon"/>
      </div>
    </div>
    <transition name="slide-left">
      <div class="layout-menu" v-show="$store.state.ui.menu">
        <h1>Sporty menu</h1>
        <layout-navigation></layout-navigation>
      </div>
    </transition>
    <div class="layout-content">
      <nuxt/>
    </div>
  </div>
</template>

<style>
  .layout-header {
    background-color: #353535; color: #FFF;
    position: fixed; right: 0; top: 0; left: 0; height: 64px;
  }
  .layout-content {
    background-color: #FFF;
    position: fixed; right: 0; bottom: 0; left: 0; top: 64px;
    overflow: auto;
  }
  .layout-menu {
    background-color: #FFF; z-index: 10;
    position: fixed; right: 0; bottom: 0; left: 0; top: 64px;
  }
  .layout-header-menu-handle {
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    float: left;
  }

  .layout-header-menu-handle {
    padding: 0px;
  }

</style>

<script>
  import Navigation from "@/components/Navigation";
  import { mapMutations } from 'vuex'

  export default {
    components: {
      'layout-navigation': Navigation,
    },
    data()
    {
      return {}
    },
    methods: {
      toggleMenu() {
        this.menuOpened = !this.menuOpened
      },
      ...mapMutations({
        toggleMenu: 'ui/toggleMenu',
      }),
    },
    computed: {
      handleIcon()
      {
        return this.$store.state.ui.menu ? 'times' : 'bars'
      },
    }
  }
</script>

