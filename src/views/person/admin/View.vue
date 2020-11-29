<template>
  <component :is="$route.params.path"></component>
</template>

<script>
export default {
  name: 'lk-admin-view',
  components: {
    feed: () => import('./Feed')
  }
}
</script>