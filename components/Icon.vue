<template>
  <i :class="`ui-icon fa fa-${name}`"></i>
</template>

<script>
  export default {
    props: {
      name: { type: String },
    },
  }
</script>
