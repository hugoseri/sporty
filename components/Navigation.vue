<template>
  <div class="menu-items" @click="closeMenu">
    <nuxt-link v-for="(item, i) in items"
               v-touchfeedback :key="i" :to="item.to" class="menu-item">
      {{ item.label }}
    </nuxt-link>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        items: [
          { to: '/', label: 'Feed' },
          { to: { name: 'profile' }, label: 'Profile' },
        ]
      }
    },
    methods: {
      ...mapMutations({
        closeMenu: 'ui/closeMenu',
      }),
    },
  }
</script>

<style>
  .menu-items { padding: 20px; }

  .menu-item {
    font-family: "Open Sans", sans-serif;
    color: #474747;
    margin-bottom: 20px;
    text-decoration: none;
    display: block;
    font-size: 15px;
  }
  .menu-item:hover, .menu-item.is-touch { text-decoration: underline; }
  .menu-item.nuxt-link-exact-active { color: #E1381B; }
</style>
