<template>
  <div class="menu-items" @click="closeMenu">
    <nuxt-link v-for="(item, i) in items" :key="i" :to="item.to" class="menu-item">
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
</style>
