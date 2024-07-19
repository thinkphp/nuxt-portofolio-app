<template>
  <div>
    <Header />
    <slot />
    <!-- <AppFooter /> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/layouts/header.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Header
  }
})
</script>